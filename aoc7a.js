var fs = require("fs");
var text = fs.readFileSync("./crabs.txt").toString("utf-8");
var crabs = text.split(",").map((num) => parseInt(num));
crabs.sort(function (a, b) {
  return a - b;
});
var median =
  crabs.length % 2 == 0
    ? Math.round((crabs[crabs.length / 2 - 1] + crabs[crabs.length / 2]) / 2)
    : crabs[(crabs.length + 1) / 2];

var fuel = 0;
crabs.forEach((crab) => (fuel += Math.abs(median - crab)));
console.log(fuel);
