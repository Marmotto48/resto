const Reservation = require("../models/reservations");
const Day = require("../models/day");
const { reservationVal } = require("../middleware/joivalidation");
var Fawn = require("fawn");
const task = Fawn.Task();

//   "date": String ("Dec 02 2019 06:00"),
module.exports = {
  create: async (req, res) => {
    try {
      const errors = [];
      const { error } = reservationVal(req.body);
      if (error) {
        const { details } = error;
        details.forEach((item) => errors.push(item.message));
        return res.json({ status: 406, msg: errors });
      }

      ///************************************TRY 0.6**************/

      //   const { where, name, phone, email, table, active, date } = req.body;

      //   //unique date
      //   const searchDate = await Reservation.findOne({ date });
      //   if (searchDate === date) {
      //     return res.status(400).send({ msg: "Date not available." });
      //   }
      //   const searchTable = await Reservation.findOne({ table });
      //   if (searchTable === table) {
      //     return res.status(400).send({ msg: "Table not available." });
      //   }

      //   const reservation = await Reservation.create({
      //     where,
      //     name,
      //     phone,
      //     email,
      //     table,
      //     active,
      //     date,
      //   });
      //   res.status(201).send({ msg: "Success", reservation });

      ///************************************FAWN**************/
      // new Fawn.Task()
      //   .remove("post", { title: regex })
      //   .run({ useMongoose: true })
      //   .then(function (results) {
      //     res.send(results);
      //     console.log(results);
      //   })
      //   .catch(function (err) {
      //     // Everything has been rolled back.
      //     // log the error which caused the failure
      //     res.status(500).json({ message: error });
      //   });
      ///************************************TRY 1.9**************/

      Day.find({ date: req.body.date }, (err, days) => {
        if (!err) {
          if (days.length > 0) {
            let day = days[0];
            day.tables.forEach((table) => {
              if (table._id == req.body.table) {
                // The correct table is table
                table.reservation = new Reservation({
                  name: req.body.name,
                  phone: req.body.phone,
                  email: req.body.email,
                  where: req.body.where,
                });
                table.isAvailable = false;
                day.save((err) => {
                  if (err) {
                    console.log(err);
                  } else {
                    console.log("Reserved");
                    res.status(200).send("Added Reservation");
                  }
                });
              }
            });
          } else {
            console.log("Day not found");
          }
        }
      });
    } catch (error) {
      res.status(500).send({ msg: "Reservation failed", error });
      logger.log("error", error);
    }
  },
};
