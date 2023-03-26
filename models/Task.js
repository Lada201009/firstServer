const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '0',
    name: 'Test',
    createdAt: '2000-12-01',
    isDone: false,
  },
  {
    id: '1',
    name: 'Test1',
    createdAt: format (new Date(), 'Y-MM-dd'),
    isDone: true,
  },
  {
    id: '2',
    name: 'Test2',
    createdAt: format (new Date(), 'Y-MM-dd'),
    isDone: true,
  },
  {
    id: '3',
    name: 'Test3',
    createdAt: format (new Date(), 'Y-MM-dd'),
    isDone: true,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
  }

  createTask (newTask) {
    this.tasks.push({ ...newTask, id: uuidv4(), isDone: false });
    return this.tasks[this.tasks.length - 1];
  }

  getTasks (page, results) {
    return [...this.tasks.slice((page - 1) * results, page * results)];
  }

  getTaskById (id) {
    const foundIndex = this.contacts.findIndex(c => c.id === id);
    return foundIndex === -1 ? null : this.tasks[foundIndex];
  }



  updateTask (id, values) {
      const foundTaskIndex = this.tasks.findIndex(c => c.id === Number(id));
      if (foundTaskIndex !== -1) {
        this.tasks[foundTaskIndex] = {
          ...this.tasks[foundTaskIndex],
          ...values,
        };
      }
      return foundTaskIndex === -1 ? null : this.tasks[foundTaskIndex];
  }
  deleteTask (id) {
    const foundTaskIndex = this.tasks.findIndex(c => c.id === Number(id));
    return foundTaskIndex === -1
      ? null
      : this.tasks.splice(foundTaskIndex, 1);
  }
}
  const tasksDbInstace = new TasksDB(tasksDB);

  module.exports = tasksDbInstace;