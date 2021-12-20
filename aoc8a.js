var fs = require("fs");
var text = fs.readFileSync("./digits.txt").toString("utf-8");
var nums = text
  .split("\n")
  .map((list) => list.split(" ").filter((num) => num !== "|"));
//1 has 2, 4 has 4, 7 has 3,8 has 7
//from 10 to 13
nums = nums.map((num) => num.splice(10, 4));
var uniques = 0;
nums.forEach(
  (num) =>
    (uniques += num.filter((no) =>
      [2, 3, 4, 7].includes(no.toString().length)
    ).length)
);
console.log(uniques);
