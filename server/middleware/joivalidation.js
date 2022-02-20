const joi = require("joi");

const reservationVal = (data) => {
  const UserRegister = joi
    .object({
      email: joi.string().required().email(),
      name: joi.string().alphanum().min(3).max(30).required(),
      phone: joi.string().required(),
      name: joi.string().alphanum().min(3).max(30).required(),
    })
    .options({ allowUnknown: true }); // allow other info;
  return UserRegister.validate(data);
};

exports.reservationVal = reservationVal;
