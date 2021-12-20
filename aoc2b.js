var fs = require("fs");
var text = fs.readFileSync("./directions.txt").toString("utf-8");
var dirs = text.split("\n").map((dir) => dir.split(" "));
var aim = 0;
var hor = 0;
var depth = 0;
var val;
for (i = 0; i < dirs.length; i++) {
  val = parseInt(dirs[i][1]);
  switch (dirs[i][0]) {
    case "forward":
      hor += val;
      depth += aim * val;
      break;
    case "up":
      aim -= val;
      break;
    case "down":
      aim += val;
      break;
    default:
      break;
  }
}
console.log(hor * depth);
