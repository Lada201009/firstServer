const yup = require('yup');

const NAME_VALIDATION_SCHEMA = yup.string().trim().min(2).max(64);
const TEL_NUMBER_VALIDATION_SCHEMA = yup
.string()
.trim()
.length(13)
.matches(/^\+380\d{9}$/, 'Tel number must corresponds pattern +380111111111');
const BIRTHDAY_VALIDATION_SCHEMA = yup.date().max(new Date());

module.exports.DELETE_TASK_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA.required(),
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA.required(),
  birthday: BIRTHDAY_VALIDATION_SCHEMA, 
  });

  module.exports.UPDATE_TASK_VALIDATION_SCHEMA = yup.object({
  name: NAME_VALIDATION_SCHEMA,
  telNumber: TEL_NUMBER_VALIDATION_SCHEMA,
  birthday: BIRTHDAY_VALIDATION_SCHEMA, 
  isDone: yup.boolean(),
  });