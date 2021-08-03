const fs = require('fs');
const os = require('os');

var data = fs.readFileSync("package.json");
console.log(JSON.parse(data));
console.log("network details",os.networkInterfaces());

// const obj1 = require('./second');
// console.log(obj1.name);

// const os = require('os');
// // console.log(os.freemem());
// // console.log(os.homedir());
// // console.log(os.hostname());
// console.log(os.platform());
