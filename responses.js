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
  'whois wcrasta':            response('wcrasta is clayton'),
  'sing':                     response('DUBUBUBUB WUUUUUUB REREERRRRER WUUUUB UHUH REEWUU ten. nine. eight. seven. six five four THREE TWO ONEDUUUUUUB WUUWUWUUUUB REEE WUBUBUBUUB'),
  '_calmdown':                response('y\'all need jesus'),
  'eb0la--':                  response('eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la-- eb0la--'),
  'good shit':                response('👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit'),
  'bad shit':                 response('do NOT sign me the FUCK up 👎👀👎👀👎👀👎👀👎👀 bad shit ba̷̶ ԁ sHit 👎 thats ❌ some bad 👎👎shit right 👎👎 th 👎 ere 👎👎👎 right ❌ there ❌ ❌ if i do ƽaү so my selｆ🚫 i say so 🚫 thats not what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ 🚫 👎 👎👎НO0ОଠＯOOＯOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ 👎 👎👎 👎 🚫 👎 👀 👀 👀 👎👎Bad shit'),
  'ayy lmao':                 response('👌👽👌👽👌👽 ayy lmao ayyy lmao good lmao👌 thats ✔ some ayyy👌👌lamayo right👌👌there👌👌👌 right✔there ✔✔if i do LMAO so my self 💯 i ayyy so 💯 thats what im probing about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌AAAYYYYyyyyYYYYYyyyyyyʸʸʸʸʸʸʸʸ👌 👌👌 👌 💯 👌 👽👽👽👌👌ayy lmao')
};
