var fs = require("fs");
var text = fs.readFileSync("./digits.txt").toString("utf-8");
var nums = text
  .split("\n")
  .map((list) => list.split(" ").filter((num) => num !== "|"));

inputs = nums.map((num) =>
  [...num].splice(0, 10).map((a) => a.split("").sort())
);
outputs = nums.map((num) =>
  [...num].splice(10, 4).map((a) => a.split("").sort().join(""))
);
var contains = function (array1, array2) {
  return array2.every((el) => array1.includes(el));
};
var findMapping = function (numbers) {
  var one = numbers.filter((num) => num.length == 2)[0];
  var three = numbers.filter((num) => num.length == 5 && contains(num, one))[0];
  var four = numbers.filter((num) => num.length == 4)[0];
  var seven = numbers.filter((num) => num.length == 3)[0];
  var eight = numbers.filter((num) => num.length == 7)[0];
  var nine = numbers.filter(
    (num) => num.length == 6 && contains(num, three)
  )[0];
  var zero = numbers.filter(
    (num) => num.length == 6 && contains(num, one) && !contains(num, three)
  )[0];
  var five = numbers.filter(
    (num) => num.length == 5 && num !== three && contains(nine, num)
  )[0];
  var two = numbers.filter(
    (num) => num.length == 5 && num !== three && !contains(nine, num)
  )[0];
  var six = numbers.filter(
    (num) => num.length == 6 && !contains(num, three) && contains(num, five)
  )[0];
  return [
    zero.join(""),
    one.join(""),
    two.join(""),
    three.join(""),
    four.join(""),
    five.join(""),
    six.join(""),
    seven.join(""),
    eight.join(""),
    nine.join(""),
  ];
};

var total = 0;
for (i = 0; i < inputs.length - 1; i++) {
  var numbs = findMapping(inputs[i]);
  var outs = outputs[i];
  value = [
    numbs.indexOf(outs[0]),
    numbs.indexOf(outs[1]),
    numbs.indexOf(outs[2]),
    numbs.indexOf(outs[3]),
  ];
  total += parseInt(value.join(""));
}
console.log(total);
