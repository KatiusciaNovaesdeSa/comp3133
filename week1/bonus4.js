function angle_Type(type) {
  if(type < 90) {
    return "Acute angle.";
  }
  if(type === 90) {
    return "Right angle.";
  }
  if(type < 180) {
    return "Obtuse angle.";
  }
  return "Straight angle.";
}

console.log(angle_Type(47))
console.log(angle_Type(90))
console.log(angle_Type(145))
console.log(angle_Type(180))