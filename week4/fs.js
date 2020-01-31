var fs = require('fs');

//create file
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

//read
fs.readFile('mynewfile1.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});

//read synchronously
try {
    var data = fs.readFileSync('mynewfile1.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}