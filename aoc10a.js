var fs = require("fs");
var text = fs.readFileSync("./syntax.txt").toString("utf-8");
var list = text.split("\n").map((row) => row.split(""));
var starts = ["(", "[", "{", "<"];
var ends = [")", "]", "}", ">"];

arrObj = [
  { st: "(", en: ")", sc: 3 },
  { st: "[", en: "]", sc: 57 },
  { st: "{", en: "}", sc: 1197 },
  { st: "<", en: ">", sc: 25137 },
];

var totalScore = 0;
var checkList = function (msg) {
  var i = 1;
  while (i < msg.length) {
    if (ends.includes(msg[i])) {
      if (msg[i - 1] == arrObj.find((o) => o.en === msg[i]).st) {
        msg.splice([i - 1], 2);
        i -= 1;
      } else if (starts.includes(msg[i - 1])) {
        totalScore += arrObj.find((o) => o.en === msg[i]).sc;
        break;
      }
    } else {
      i += 1;
    }
  }
};

list.forEach((li) => checkList(li));
console.log(totalScore);
