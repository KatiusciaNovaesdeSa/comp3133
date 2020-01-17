const capitalize = ([first, ...other]) =>
{
     
   return firstLetter = first.toUpperCase() + other.join('').toLowerCase();
  

}

console.log(capitalize('fooBar'));
console.log(capitalize('NodeJs'));
