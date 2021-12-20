var fs = require("fs");
var text = fs.readFileSync("./binary.txt").toString("utf-8");
var bins = text.split("\n");
var gamma = 0;
var epsilon = 0;
var val;
for (var i = 0; i < bins[0].length; i++) {
  val =
    bins.filter((bin) => bin[i] == "0").length >
    bins.filter((bin) => bin[i] == "1").length
      ? 0
      : 1;
  gamma += val * 2 ** i;
  epsilon += (val - 1) * -1 * 2 ** i;
}
console.log(gamma * epsilon);
