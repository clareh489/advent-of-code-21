const { lookup } = require("dns");
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
  var s = msg
    .filter((elem) => starts.includes(elem))
    .map((st) => arrObj.find((o) => o.st === st).en);
  var e = msg.filter((elem) => ends.includes(elem));
  console.log(s);
  console.log(e);
  while (msg.length > 0) {
    if (s[0] == e[0]) {
      s.shift();
      e.shift();
      console.log(s);
      console.log(e);
    } else {
      return arrObj.find((o) => o.en === e[0]).sc;
    }
  }
  return 0;
};

checkList(list[0]);
//list.forEach((elem) => (totalScore += checkList(elem)));
console.log(totalScore);
