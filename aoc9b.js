var fs = require("fs");
var text = fs.readFileSync("./heatmap.txt").toString("utf-8");
var heatmap = text
  .split("\n")
  .map((row) => row.split("").map((n) => parseInt(n)))
  .filter((list) => list.length > 1);

var basins = [];
var totalColumns = heatmap[0].length;
var totalRows = heatmap.length;

var checkAround = function (row, col) {
  var point = heatmap[row][col];
  if (point !== 9 && point !== "B") {
    basinSize += 1;
    heatmap[row][col] = "B";
    if (col > 0) {
      checkAround(row, col - 1);
    }
    if (col < totalColumns - 1) {
      checkAround(row, col + 1);
    }
    if (row > 0) {
      checkAround(row - 1, col);
    }
    if (row < totalRows - 1) {
      checkAround(row + 1, col);
    }
  }
};

var basinSize = 0;
for (var rows = 0; rows < heatmap.length; rows++) {
  for (var cols = 0; cols < heatmap[0].length; cols++) {
    if (heatmap[rows][cols] !== 9 && heatmap[rows][cols] !== "B") {
      basinSize = 0;
      checkAround(rows, cols);
      basins.push(basinSize);
    }
  }
}
basins.sort(function (a, b) {
  return b - a;
});
console.log(basins[0] * basins[1] * basins[2]);
