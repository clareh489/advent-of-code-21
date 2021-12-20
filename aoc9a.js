var fs = require("fs");
var text = fs.readFileSync("./heatmap.txt").toString("utf-8");
var heatmap = text
  .split("\n")
  .map((row) => row.split("").map((n) => parseInt(n)))
  .filter((list) => list.length > 1);
var riskLevel = 0;
var columns = heatmap[0].length;
var rows = heatmap.length;
console.log(columns);
console.log(rows);
var checkLowest = function (point, row, col) {
  var left = col > 0 ? heatmap[row][col - 1] : 10;
  var right = col < columns - 1 ? heatmap[row][col + 1] : 10;
  var up = row > 0 ? heatmap[row - 1][col] : 10;
  var down = row < rows - 1 ? heatmap[row + 1][col] : 10;
  var adj = [left, right, up, down];
  var risk = adj.every((n) => n > point) ? point : -1;
  if (risk > -1) {
    riskLevel += risk + 1;
  }
};

var checkColumns = function (row, index) {
  for (var col = 0; col < row.length; col++) {
    checkLowest(row[col], index, col);
  }
};
heatmap.forEach(checkColumns);
console.log(riskLevel);
