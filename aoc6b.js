var fs = require("fs");
var text = fs.readFileSync("./lanternfish.txt").toString("utf-8");
var fishSpawns = text.split(",").map((num) => parseInt(num));
var buckets = [...Array(9)].map((e) => (e = 0));

fishSpawns.forEach((day) => (buckets[day] += 1));
for (var i = 0; i < 256; i++) {
  var eight = buckets.shift();
  buckets.push(eight);
  buckets[6] += eight;
}
console.log(buckets.reduce((x, y) => x + y));
