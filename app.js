const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');


const tasksDB = [
  {
    id: 0,
    name: 'Task1',
    createdAt: '2000-12-01',
    isDone: false,
  },
  {
    id: 1,
    name: 'Task2',
    createdAt: format (new Date(), 'Y-MM-dd'),
    isDone: true,
  },
];
class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: uuidv4(),  isDone: false, createdAt:  format(new Date(), 'Y-MM-dd'),});
    return this.tasks[this.taskss.length - 1];
    } 
    getTasks () {
      return [...this.tasks];
    }
    getTaskById (id) {
      const foundIndex = this.contacts.findIndex(c => c.id === Number(id));
      return foundIndex === -1 ? null : this.tasks[foundIndex];
    }
    updateTask (id, values) {
      const foundTaskIndex = this.tasks.findIndex(c => c.id === Number(id));
      if (foundTaskIndex !== -1) {
        this.tasks[foundTaskIndex] = {
          ...this.contacts[foundTaskIndex],
          ...values,
        };
      }
      return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }
  deleteTask (id) {
    const foundTaskIndex = this.contacts.findIndex(c => c.id === Number(id));
    return foundTaskIndex === -1
      ? null
      : this.tasks.splice(foundTaskIndex, 1);
  }
}
  const tasksDbInstace = new TasksDB(tasksDB);
  const app = express();
  app.use(express.json());


  app.get('/', (req, res) => {
      res.send('app )))');
    });

 app.get('/tasks', (req, res) => {
  const tasks = tasksDbInstace.getTasks();
  res.status(200).send(tasks);
});

app.post('/tasks', (req, res) => {
  const createTask = tasksDbInstace.createTask(req.body);
  res.status(201).send(createTask);
});


module.exports = app;