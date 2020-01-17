const colors = ['red' , 'green' , 'blue']

const capitalized = ([first, ...others]) =>
{
    
  return firstLetter = first.toUpperCase() + others.join('').toLowerCase();
  
}

const capitalizedColor = colors.map(capitalized);

console.log(capitalizedColor);