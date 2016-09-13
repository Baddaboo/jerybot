"use strict"

const fs = require('fs');
const Q  = require('q');

const WATCH_USERS = 'notification_users.json';
const ROOMS       = 'rooms.json';
const QUOTES      = 'jeryquotes.json';


var write_to_file = function (file, data) {

  var d = Q.defer();

  fs.writeFile(file, JSON.stringify(data, null, 2), (err) => {
    if (err) {
      console.log('There was an error writing to : ' + file);
      console.log(err);
      d.reject();
    } else {
      d.resolve();
    }
  });

  return d.promise;

};


var add_user_watch = function (user, email) {
  let users = require(`./${WATCH_USERS}`);
  users[user] = {
    email: email
  };

  return write_to_file(WATCH_USERS, users);
};


var add_room = function (room) {
  let rooms = require(`./${ROOMS}`);
  if (rooms.indexOf(room) === -1) {
    rooms.push(room);
  }

  return write_to_file(ROOMS, rooms);
};

var add_quote = function (quote) {
  let quotes = require(`./${QUOTES}`);
  if (quotes.indexOf(quote) === -1) {
    quotes.push(quote);
  }
  
  return write_to_file(QUOTES, quotes);
}

module.exports = {
  add_user_watch: add_user_watch,
  add_room: add_room,
  add_quote: add_quote,
  WATCH_USERS: WATCH_USERS,
  ROOMS: ROOMS,
}
