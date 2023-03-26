const { 
  DELETE_TASK_VALIDATION_SCHEMA, 
  UPDATE_TASK_VALIDATION_SCHEMA, 
} = require('../utils/validationSchemas');

module.exports.validateTaskOnDelete = async (req,res,next) => {
  const { body } = req;
  
    try{
     const validatedTask = await DELETE_TASK_VALIDATION_SCHEMA.validate(body);
     req.body = validatedTask;
     next();
     }catch(e){
    next(e);
    }
  };
  
  module.exports.validateTaskOnUpdate = async (req,res,next) => {
    const { body } = req;
  
    try{
      const validatedTask = await UPDATE_TASK_VALIDATION_SCHEMA.validate(body);
      req.body = validatedTask;
      next();
      }catch(e){
    next(e);
    }
  };