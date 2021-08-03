
const fs = require('fs');

// fs.readFile('text.txt','utf8',(err,data)=>{
//     console.log(err,data); 
// })


//readFilesync blocks the asynchronous behaviour.
// const a = fs.readFileSync('text.txt');
// console.log(a.toString());
const strings = fs.readFileSync('text.txt');
function remVowel(str) {
    let newStr = " ";
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
            newStr += str[i];
        };
    };
    return newStr;
};

console.log(remVowel(strings.toString()));
var fresh = remVowel(strings.toString());

fs.writeFile('updated.txt', fresh, () => {
    console.log("rewrited");
});
console.log("Completed reading file");  

