const marks = require("./models/marks");
const student = require("./models/student");

const retyGrade = new marks('SST', 'Rety', 85);
retyGrade.computeScore();

module.exports= retyGrade;