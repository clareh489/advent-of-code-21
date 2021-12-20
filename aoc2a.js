var fs = require("fs");
var text = fs.readFileSync("./directions.txt").toString('utf-8');
var dirs = text.split("\n");
forw=dirs.filter(dir => dir.includes("forward")).map(elem =>parseInt(elem.split(" ")[1])).reduce((x,y)=>x+y);;
down=dirs.filter(dir => dir.includes("down")).map(elem =>parseInt(elem.split(" ")[1])).reduce((x,y)=>x+y);;
up=dirs.filter(dir => dir.includes("up")).map(elem =>parseInt(elem.split(" ")[1])).reduce((x,y)=>x+y);;
console.log(forw*(down-up));