var array = [1, 2, 3, 4];
let calculateSum = array.reduce((acc, val) => {
  return acc + val;
});

let calculateProduct = array.reduce((acc, val) => {
  return acc * val;
});

console.log(calculateSum);

console.log(calculateProduct);