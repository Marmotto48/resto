const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reservationSchema = new Schema({
  where: {
    type: String,
    enum: ["cafe", "diner", "bar"],
    default: "cafe",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
//     table: [
//       {
//         name: String,
//         capacity: Number,
//         isAvailable: Boolean,
//         location: String,
//         reservation: {
//           type: mongoose.Types.ObjectId,
//           ref: "table",
//           // required: true,
//         },
//       },
//     ],
// //   table: {
// //     type: String,
// //     required: true,
// //   },
//   active: {
//     type: Boolean,
//     required: true,
//     default: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
});

module.exports = mongoose.model("reservation", reservationSchema);
