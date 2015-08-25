
var equal = require('assert').equal;
var cleanDiacritics = require('../cleanDiacritics');

var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
    to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz";

test('#cleanDiacritics', function() {

  equal(cleanDiacritics(from), to);
  equal(cleanDiacritics(from.toUpperCase()), to.toUpperCase());


  equal(cleanDiacritics('ä'), 'a');
  equal(cleanDiacritics('Ä Ø'), 'A O');
  equal(cleanDiacritics('1 foo ääkkönen'), '1 foo aakkonen');
  equal(cleanDiacritics('Äöö ÖÖ'), 'Aoo OO');
  equal(cleanDiacritics(' ä '), ' a ');
  equal(cleanDiacritics('- " , £ $ ä'), '- " , £ $ a');
});
