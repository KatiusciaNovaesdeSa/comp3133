const buffer_array = Buffer.from([8,6,7,5,3,0,9]);

const buffer_string = Buffer.from("I'am a string!","utf-8");

console.log("Buffer ", buffer_array);
console.log("Buffer ", buffer_string);
console.log("Buffer ", buffer_string.toString());

console.log("Buffer ", buffer_string.toString("hex"));

console.log("Buffer ", buffer_string.toString("utf-8", 0,11));

var join_buf = Buffer.concat([buffer_array, buffer_string]);

console.log(join_buf);

console.log(JSON.stringify(join_buf));


