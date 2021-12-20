var fs = require("fs");
var text = fs.readFileSync("./crabs.txt").toString("utf-8");
var crabs = text.split(",").map((num) => parseInt(num));
var meanF = Math.floor(crabs.reduce((x, y) => x + y) / crabs.length);
var meanC = meanF + 1;
var fuelFloor = 0;
var fuelCeil = 0;
var fuelUse = function (crab, avg) {
  var dif = Math.abs(avg - crab);
  return (dif / 2) * (dif + 1);
};
var fuelSum = function (crab) {
  fuelFloor += fuelUse(crab, meanF);
  fuelCeil += fuelUse(crab, meanC);
};
crabs.forEach((crab) => fuelSum(crab));
console.log(Math.min(fuelFloor, fuelCeil));
