function multArray(input) {
    var output = [];
    var even = 1;
  
    for (i = 0; i < input.length; i++) {
      if (input[i] % 2 == 0) {
        even = input[i];
      } else {
        output.push(input[i] * even);
      }
    }
  
    return output;
  }

module.exports = multArray;