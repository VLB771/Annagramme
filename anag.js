function anag(myArg) {

var fs = require('fs');
var mot =myArg[0].split('').sort().join('');
var txt =myArg[1];
var arr = fs.readFileSync(txt).toString().split("\n");

var arrF = [];

for(i in arr) {
    var comp = arr[i].split('').sort().join('');
    if(mot.length == comp.length && mot === comp){
        arrF.push(arr[i]);
    }
    else{}
}


console.log("Affichage des annagrammes du premier argument dans le deuxième:");

console.log(arrF);

};

var myArg = process.argv.slice(2);
anag(myArg);
