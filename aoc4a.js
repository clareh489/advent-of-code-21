//Data sorting
var fs = require("fs");
var text = fs.readFileSync("./bingo.txt").toString("utf-8");
var bins = text.split("\n\n");
var numbers = bins[0].split(",");
bins.shift();
bins = bins.map((bin) =>
  bin
    .split("\n")
    .map((bi) => bi.split(/\s+/).filter((elem) => elem !== ""))
    .filter((elem) => elem.length)
);
var winnerFound;
//Sum results when bingo called
var sumCard = function (card) {
  var sum = 0;
  card.forEach((row) =>
    row.forEach((num) => (sum += num == "called" ? 0 : parseInt(num)))
  );
  return sum * numbers[j];
};
//Check card for bingo
var bingoCheck = function (bingcard) {
  var len = bingcard.length;

  for (i = 0; i < len; i++) {
    if (
      bingcard[i].filter((elem) => elem == "called").length == len ||
      bingcard.filter((elem) => elem[i] == "called").length == len
    ) {
      winnerFound = "true";
      console.log("Winner Found");
      console.log(sumCard(bingcard));
      return true;
    }
  }
  return false;
};

//Check card for called number
var checkCard = function (card, num) {
  return card.map((row) => row.map((elem) => (elem == num ? "called" : elem)));
};

var j = 0;
while (winnerFound !== "true" && j < numbers.length) {
  bins = bins.map((card) => checkCard(card, numbers[j]));
  bins.forEach((elem) => bingoCheck(elem));
  j++;
}
