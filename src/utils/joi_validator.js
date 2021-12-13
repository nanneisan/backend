const BAD_REQUEST = 400;

//validation error
const CustomError = require("../errors/custom_error");

const error_format = (schema, data) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });

  if (error) {
    let errs = [];
    for (let i = 0; i < error.details.length; i++) {
      errs.push(error.details[i]["message"]);
    }
    throw new CustomError(BAD_REQUEST, "Incomplete information!", errs);
  } else return value;
};

module.exports = error_format;
