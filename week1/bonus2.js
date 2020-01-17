function max(x, y, z) 
 {
  max_num = 0;
  if (x > y)
  {
    max_num = x;
  } else
  {
    max_num = y;
  }
  if (z > max_num) 
  {
    max_num = z;
  }
  return max_num;
}

console.log(max (1,0,1));
console.log(max (0,-10,-20));
console.log(max (1000,510,440));
