"use strict";
var waffle = require('./waffle.js');

var response = function (message, room_guard, delay) {
  return {
    message: message,
    delay: delay || 0,
    room_guard: room_guard,
  }
};

const introduce = response(`marley whois jzhao`, true, 3000);
const handsclapping = response('👏🏻👏🏼👏🏽👏🏾👏🏿');
const defaultsmiley = response(':}');
const no = response('no');
const cantemotion = response('oh man not like this');
const waterloo = response('🍁');
const bougieresponse = response('oh man i made assumptions on bougieness rip');
const uselessquestion = response('yes');
const uselesscomment = response('same');

// Be sure not to add anything too general - wafflebot strips the "wafflebot" prefix in a message
// Tokens:
// {from} username of sender
// {room} current room

module.exports = {
  'whois jerybot':            introduce,
  'who is jerybot':           introduce,
  'marley whois jerybot':     introduce,
  'marley who is jerybot':    introduce,
  'clap':                     handsclapping,
  'pray':                     handsclapping,
  'waterloo':                 waterloo,
  'bougie':                   bougieresponse,
  '_uselesscomment':          uselesscomment,
  '_uselessquestion':         uselessquestion,
  'whois prithvi':            response(waffle, false),
  'sing':                     response('DUBUBUBUB WUUUUUUB REREERRRRER WUUUUB UHUH REEWUU ten. nine. eight. seven. six five four THREE TWO ONEDUUUUUUB WUUWUWUUUUB REEE WUBUBUBUUB')
};
