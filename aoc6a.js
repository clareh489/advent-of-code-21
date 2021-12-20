var fs = require("fs");
var text = fs.readFileSync("./lanternfish.txt").toString('utf-8');
var fish = text.split(",").map(num=>parseInt(num));
var day=0;
var fish=[3,4,3,1,2];
var updateLantern=function(fish){
    switch(fish-1){
        case -1:
            newFish.push(8);
            return 6;
            break;
        default:
            return fish-1;
            break;
    }
}
while(day<256){
    console.log(day);
    var newFish=[];
    fish=fish.map(f=>updateLantern(f));
    fish=fish.concat(newFish);
    day++;  
}
console.log(fish.length);
