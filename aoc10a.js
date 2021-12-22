var fs = require("fs");
var text = fs.readFileSync("./syntax.txt").toString("utf-8");
var list = text.split("\n").map((row) => row.split(""));
var starts = ["(", "[", "{", "<"];
var ends = [")", "]", "}", ">"];
var start = function (char) {
  switch (char) {
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    case ">":
      return "<";
  }
};
var score = function (char) {
  switch (char) {
    case ")":
      return 3;
    case "]":
      return 57;
    case "}":
      return 1197;
    case ">":
      return 25137;
  }
};
var totalScore = 0;
var checkList = function (msg) {
  var i = 1;
  while (i > -1 && i < msg.length) {
    if (ends.includes(msg[i])) {
      if (msg[i - 1] == start(msg[i])) {
        msg.splice([i - 1], 2);
        i -= 1;
      } else if (starts.includes(msg[i - 1])) {
        totalScore += score(msg[i]);
        i = -1;
      }
    } else {
      i += 1;
    }
  }
};

list.forEach((li) => checkList(li));
console.log(totalScore);
