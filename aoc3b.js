var fs = require("fs");
var text = fs.readFileSync("./binary.txt").toString('utf-8');
var bins = text.split("\n");
var comp=function(array1,array2,comparison){
    if(array1.length>array2.length){
        return comparison=="bigger" ? array1 : array2;
    }
    return comparison=="bigger" ? array2 : array1;
}

var oxy=[...bins];
var co=[...bins];
for(var i=0;i<bins[0].length;i++){  
    oxy=comp(oxy.filter(bin=>bin[i]=="0"),oxy.filter(bin=>bin[i]=="1"),"bigger");
    co=co.length>1 ? comp(co.filter(bin=>bin[i]=="0"),co.filter(bin=>bin[i]=="1"),"smaller") : co;
}
console.log(parseInt(oxy,2)*parseInt(co,2));

