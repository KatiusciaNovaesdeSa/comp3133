var events = require('events');
var emitter = new events.EventEmitter;

var convert = function convert(){
    const buf = Buffer.from([0x62,0x75,0x66,0x65,0x72]);
    buf.forEach(function(elements){
        return console.log(elements);
    });
      console.log('buffer converted')
}
emitter.on('convert', convert);
emitter.emit('convert');



