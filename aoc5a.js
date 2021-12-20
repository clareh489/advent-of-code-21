var fs = require("fs");
var text = fs.readFileSync("./lines.txt").toString('utf-8');
var lines = text.split("\n");
lines=lines.map(line=>line.split(" -> ").map(dot=>dot.split(","))).filter(elem=>elem.length>1);
vertical=lines.filter(line => line[0][0]==line[1][0]);
horizontal=lines.filter(line => line[0][1]==line[1][1]);
var myGrid = [...Array(1000)].map(e => Array(1000).fill(0));
var populateVertical=function(line){
    var column=line[0][0];
    var start=Math.min(line[0][1],line[1][1]);
    var end=Math.max(line[0][1],line[1][1]);
    for(i=start;i<=end;i++){
        myGrid[column][i]+=1;
    }
}
var populateHorizontal=function(line){
    var row=line[0][1]
    var start=Math.min(line[0][0],line[1][0]);
    var end=Math.max(line[0][0],line[1][0]);
    for(i=start;i<=end;i++){
        myGrid[i][row]+=1;
    }
}
horizontal.forEach(elem=>populateHorizontal(elem));
vertical.forEach(elem=>populateVertical(elem));
var mines=0;
myGrid.forEach(spot => spot.forEach(space => mines+= space>1 ? 1 : 0));
console.log(mines);