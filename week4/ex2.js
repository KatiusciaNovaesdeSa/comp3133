console.log('== System ==');
console.log(`Version: ${process.version}`);
console.log(`Architecture: ${process.arch}\n`);

console.log('== NodeJS ==');
console.log(`Node vesion: ${process.versions['node'] }`);
console.log(`V8 vesion: ${process.versions['v8'] }`);
console.log(`libuv vesion: ${process.versions['zlib'] }\n`);

console.log('== Process ==');
console.log(`pid: ${process.pid}`);
console.log(`title: ${process.title}`);
console.log(`currten directory: ${process.cwd}`);