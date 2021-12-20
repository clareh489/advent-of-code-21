var fs = require("fs");
var text = fs.readFileSync("./input.txt").toString('utf-8');
var depths = text.split("\n");
var output=0;
depths=depths.map(element => parseInt(element));
for(i=0;i<depths.length;i++){
    if(depths[i]<depths[i+1]){
        output+=1;
    }
}
console.log(output);