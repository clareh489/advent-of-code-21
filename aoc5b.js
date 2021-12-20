var fs = require("fs");
var text = fs.readFileSync("./lines.txt").toString("utf-8");
var lines = text.split("\n");
lines = lines
  .map((line) =>
    line
      .split(" -> ")
      .map((dot) => dot.split(","))
      .map((el) => el.map((elm) => parseInt(elm)))
  )
  .filter((elem) => elem.length > 1);
var myGrid = [...Array(1000)].map((e) => Array(1000).fill(0));
var hDif, vDif, limit, xdir, vdir;
var populate = function (line) {
  hDif = line[0][0] - line[1][0];
  vDif = line[0][1] - line[1][1];
  limit = Math.max(Math.abs(hDif), Math.abs(vDif));
  xdir = hDif == 0 ? 0 : hDif > 0 ? -1 : 1;
  vdir = vDif == 0 ? 0 : vDif > 0 ? -1 : 1;
  for (i = 0; i <= limit; i++) {
    myGrid[line[0][0] + i * xdir][line[0][1] + i * vdir] += 1;
  }
};
lines.forEach((elem) => populate(elem));
var mines = 0;
myGrid.forEach((spot) => spot.forEach((space) => (mines += space > 1 ? 1 : 0)));
console.log(mines);
