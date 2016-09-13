"use strict";
const stock_responses = require('./responses');
const file_actions = require('./file_actions');
const exec = require('child_process').exec;

class ActionHandler {

  constructor (client, watchlist, meme) {
    this.client    = client;
    this.watchlist = watchlist;
    this.meme      = meme;
  }

  auto_update (requester) {
    exec("git pull", function (error, stdout, stderr) {
      console.log(stdout);
    });
  }
  
  /**
   * A check to ensure action is being performed in a room
   *
   * @param   {String} requester The originating username or #room
   * @param   {String} room      The channel name (empty string if not in a room)
   *
   * @return  {Boolean} Are we in a room?
   *
   * @private
   */
  _room_guard (requester, room) {
    if (room) return true;

    this.client.say(requester, 'You need to be in a room to do this!');
    return false;
  }


  /**
   * Joins an IRC Channel
   *
   * @param  {String} requester     The username of the message author
   * @param  {String} channelToJoin The name of the channel we want to join
   */
  join_room (requester, channelToJoin) {
    if (channelToJoin.charAt(0) !== '#') {
      this.client.say(requester, 'I cannot join ' + channelToJoin);
      return ;
    }

    /* Join room */
    this.client.join(channelToJoin);

    /* Make it permanent */
    file_actions.add_room(channelToJoin).then(() => {
      this.client.say(requester, 'I have joined ' + channelToJoin + '!');
    }, () => {
      this.client.say(requester, 'There was a potential problem permanently joining ' + channelToJoin);    
    });

  } 


  /**
   * Action to engage in deadly combat with the enemy known as 'marley'
   *
   * @param  {String} requester The username of the message author
   * @param  {String} room      The channel name
   */
  fight_marley (requester, room) {

    if (!this._room_guard(requester, room)) return ;

    this.client.action(room, 'Commencing battle...');

    setTimeout(() => {
        this.client.say(room, 'marley i feel the need');
    }, 1250);
    setTimeout(() => {
        this.client.say(room, 'marley come on and slam');
    }, 2320);

  }
  
  acknowledgeplusplus(requester) {
    this.client.say(requester, ':}');
  }
  
  handlequestion(requester, message) {
    var response;
    if (message.indexOf('yes') !== -1) {
      response = stock_responses['_calmdown']
    } else {
      response = stock_responses['_uselessquestion']
    }
    let responseMessage = response.message.replace('{from}', requester);
    this.client.say(requester, responseMessage);
  }


  /**
   * Handles all other actions (ie the stock responses)
   *
   * @param  {String} requester The username of the message author
   * @param  {String} message   The message text
   * @param  {String} room      The IRC Channel
   */
  handle_other (requester, message, room) {
    var response = stock_responses[message];
    if (!response) {
      response = stock_responses['_uselesscomment'];
    }

    if (response.room_guard) {
      if (!this._room_guard(requester, room)) return ;
    }
    
    if (message[message.length - 1] === '?') {
      if (!room) { return ;}
      this.handlequestion(room, message);
      return ;
    }

    let responseMessage = response.message.replace('{from}', requester);

    setTimeout(() => {
      if (room) {
        this.client.say(room, responseMessage);
      } else {
        this.client.say(requester, responseMessage);
      }
    }, response.delay);

  }

  /**
   * Action to set up set up ping notifications
   *
   * @param  {String} requester The username of the message author
   * @param  {String} message   The message text
   * @param  {String} room      The IRC Channel
   */
  notifications (requester, message, room) {

    // TODO: Set up the reverse of room_guard or refactor or something
    if (room) {
      this.client.say(room, requester + ': private message me to set up notifications :)');
      return ;
    }
    
    var msg_parts = message.split(' ');
    var email     = msg_parts[2];

    if (msg_parts[1] === 'subscribe' && email) {

      this.watchlist.subscribe(requester, email).then(() => {
        this.client.say(requester, 'Successfully set up notifications to ' + email);
      }, () => { 
        this.client.say(requester, 'There was a possible error setting up notifications. Please contact markl');
      });

    } else {
      this.client.say(requester, 'Invalid command. Usage: notify subscribe myemail@example.com');
    }

  }

  /**
   * Makes a meme
   *
   * @param  {String} requester The username of the message author
   * @param  {String} message   The message text
   * @param  {String} room      The IRC Channel
   */
  make_meme (requester, message, room) {
    console.log(message);
    // TODO: parse message here maybe
    this.meme.create(message).then((result) => {
      this.client.say(room, `${requester}: ${result}`);
    }, (error) => {
      console.log('oh dear' + error);
    });

  }

};

module.exports = ActionHandler;
