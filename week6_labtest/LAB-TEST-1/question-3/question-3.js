let fs = require("fs");
let path = require("path");


let logDir = process.cwd() + "/Logs";


if (fs.existsSync(logDir)) {
    process.chdir('Logs');
    for (var data = 0; data < 10; data++) {
        console.log(('deleted files...log' + [data] + ".txt"));
        fs.unlinkSync('log' + [data] + ".txt");
    }
    process.chdir('../');
    fs.rmdirSync('Logs');
} else {
    fs.mkdirSync("Logs");
    process.chdir('Logs');
    for (var data = 0; data < 10; data++) {
        console.log(('log' + [data] + ".txt"));
        fs.writeFileSync('log' + [data] + ".txt");
    }
}