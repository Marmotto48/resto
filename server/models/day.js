// var mongoose = require("mongoose");

// var dateSchema = new mongoose.Schema({
//   date: Date,
//   table: {
//     type: mongoose.Types.ObjectId,
//     ref: "table",
//     // required: true,
//   },
// });
// module.exports = mongoose.model("date", dateSchema);

const mongoose = require("mongoose");
const tableSchema = require("./table").schema;

const daySchema = new mongoose.Schema({
  date: Date,
  tables: [tableSchema],
});
// var Day = mongoose.model("Day", daySchema);

// module.exports.model = Day;
module.exports.schema = daySchema;
module.exports = mongoose.model("Day", daySchema);
