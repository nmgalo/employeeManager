//Working with specific data and need this.

exports.translitSpecial = (word) => {
  word = word.replace(/S/g, "შ");
  word = word.replace(/Z/g, "ძ");
  word = word.replace(/W/g, "წ");
  word = word.replace(/T/g, "თ");
  word = word.replace(/c/g, "ც");
  return word;
};
exports.translitSpecial2 = (word) => {
  word = word.replace(/ჭ/g, "W");
  word = word.replace(/შ/g, "S");
  word = word.replace(/ძ/g, "Z");
  word = word.replace(/თ/g, "t");
  word = word.replace(/ც/g, "c");
  return word;
};
