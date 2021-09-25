
var fs = require("fs");

fs.mkdirSync("day6");

fs.writeFileSync("day6/day-6.txt", "hello");

fs.appendFileSync("day6/day-6.txt", " world");

var t = fs.readFileSync("day6/day-6.txt", "utf-8");
console.log(t);

fs.renameSync("day6/day-6.txt", "day6/day-five.txt");

fs.unlinkSync("day6/day-five.txt");

fs.rmdirSync("day6")