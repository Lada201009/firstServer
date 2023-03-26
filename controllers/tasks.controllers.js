const createError = require('http-errors');
const { TaskDB } = require('./../models');



module.exports.updateTaskById = (req, res, next)=>{
  const {
    params: { id }, body,
  } = req;
  const updatedTask = TaskDB.updateTask(id, body)
  if(updatedTask){
    return res.status(200).send(updatedTask);
  } 
    //res.status(404).send('Contact Not Found');
    next(createError(404, 'Task Not Found'));
};
module.exports.deleteTaskById =(req, res, next) => {
  const {
    params: {id},
  } =req;
  const deleteTask = TaskDB.deleteTask(id);
  if(deleteTask) {
    return res.status(204).send();
  } 
  // res.status(404).send('Not Found');
  next(createError(404, 'Task Not Found'));
  };