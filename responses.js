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
  'chicken tenders':          response('All I 👀 want are 🐓chicken🐓 tenders🍗 Fresh from the hands✋ of the 🍗tendie vendors Chunks of 🐣chicken🐣 I will toss Into spicy🍛 mustard sauce 👱Mommy👱, I am hungry - famished Those nuggies on🔛 my 🍽plate🍽 have vanished I suggest you get me ➕more➕ Now🕥, not later🕑, fucking *censored*!  I scream😱 and shout 😠 and wet 💦 my diapies My bum🍑 needs soothing 💦wipey wipeys💦.  Do you want me to get a🅰️ rash😠?  😫Only you would be so🆘 brash😫 This is why my 👨daddy\'s👨 gone🏃 I\'m 😞ashamed to call📲📲 you 👱mom👪.  👱Mommy 😭cries 😭, and fills my 🍽 plate 🍽 Tries to douse my 🔥flaming🔥 💢hate😡 🐓Tendies🐓 are the only thing That seem to ease the gripping 😡pain😡 The pain within my hungry tummy Feed your 👼baby👼, feed me mummy👱!  Those sweet 🍯 🍗tendies 🐓 in my tum Mask my stinging rashy bum🍑 👱Mommy sits💺 and has🈶 🅰️a🅰️ drink🚱 The only 🕦time🕦 that she can 💁think Is when her baby👼 has his treat Of chocolate🍫 milk🍼 and chicken🐓🐓 meat 🍲🍲 😭Mommy👱 knows what😦 she must do😭 While her baby👶 has ❌no ❌❌ clue🗝 Pulls the trigger🔫, flash📸 of 🕯light🕯🕯 ✅Now it\'s over, all is right✅ 🎧Silence🔇 graces 👱mommy\'s ears👂 😏Smiles through the streaming 😭tears😭 No more➕ 🍗tendies🍗, poop💩 or pee💦 The pain is over, mommy\'s free💜'),
  'ayy lmao':                 response('👌👽👌👽👌👽 ayy lmao ayyy lmao good lmao👌 thats ✔ some ayyy👌👌lamayo right👌👌there👌👌👌 right✔there ✔✔if i do LMAO so my self 💯 i ayyy so 💯 thats what im probing about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌AAAYYYYyyyyYYYYYyyyyyyʸʸʸʸʸʸʸʸ👌 👌👌 👌 💯 👌 👽👽👽👌👌ayy lmao'),
  ':}':                       response(':}')
};
