// var mongoose = require("mongoose");

// var tableSchema = new mongoose.Schema({
//   name: String,
//   capacity: Number,
//   isAvailable: Boolean,
//   location: String,
//   reservation: {
//     type: mongoose.Types.ObjectId,
//     ref: "table",
//     // required: true,
//   },
// });
// module.exports = mongoose.model("table", tableSchema);

var mongoose = require("mongoose");

const reservationSchema = require("./reservations").schema;

var tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
  location: String,
  reservation: {
    required: false,
    type: reservationSchema,
  },
});
var Table = mongoose.model("Table", tableSchema);

module.exports.model = Table;
module.exports.schema = tableSchema;
