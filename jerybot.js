"use strict";

/* Dependencies */
const MessageHandler = require('./handlemessage.js');
const Mailer         = require('./mailer.js');
const MemeMaker      = require('./meme.js');
const connection     = require('./ircconnect.js');
const file_actions   = require('./file_actions');
const fs             = require('fs');
const graph          = require('fbgraph');

const config = require('./config.json')

if (!config.irc_server || !config.irc_server_password || !config.mail_transport_string) {
  console.log('Please ensure a valid config.json');
  return ;
}

const client = connection(config.irc_server, config.irc_server_password, config.botname);
const mailer = new Mailer(config.mail_transport_string);
const meme   = new MemeMaker(config.imgflip);
const handle = new MessageHandler(client, mailer, meme);

/* Get Facebook posts */
graph.setVersion('2.3')
var getfbposts = function(url) {
  graph.get(url, {limit: 250, access_token: config.fb_access_token}, function(err, res) {
    if (err) {
      console.log(err)
      return;
    }
    if (!res["statuses"]) { return ; }
    var statuses = res["statuses"];
    if (!statuses["data"]) { return ; }
    var data = statuses["data"];
    for (var i = 0; i < data.length; i++) {
      let message = data[i]["message"]
      if (message) {
        let cleanmessage = message.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        if (cleanmessage.length) {
          console.log(cleanmessage);
          file_actions.add_quote(cleanmessage);
        }
      }
    }
    if (statuses.paging && statuses.paging.next) {
      getfbposts(statuses.paging.next);
    }
    console.log(statuses.paging.next);
  });
}
getfbposts(config.jery_fb_id + "?fields=statuses");

/* Handle incoming messages */
client.addListener('message#', handle.message.bind(handle));
client.addListener('pm', handle.pm.bind(handle));

client.addListener('error', function(err) {
  console.log('Error: ' , err);
});

/* Finally, connect */
client.connect();


// ============================
// Auto-join rooms
// ============================

client.addListener('registered', (err) => {
  const rooms = require('./rooms.json')
  rooms.forEach((room) => {
    client.join(room);
  });
});
