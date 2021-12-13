const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);

const createUser = Joi.object().keys({
  name: Joi.string().required(),
  age: Joi.number().required(),
  gender: Joi.string().required(),
});

module.exports = {
  createUser,
};
