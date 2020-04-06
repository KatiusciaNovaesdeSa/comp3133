function removeVowel(string) {

        var characterArray = string.split("");
        return characterArray.map(function (character) {
          if (/[aeiouyAEIOUY]/.test(character)) {
            character = "";
          } else {
            return character;
          }
        }).join("");
      }
   
  

  module.exports = removeVowel;