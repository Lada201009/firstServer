const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const tasksDB = [
  {
    id: '0',
    name: 'Task',
    createdAt: '2000-12-01',
    isDone: false,
  },
  {
    id: '1',
    name: 'Task1',
    createdAt: format (new Date(), 'Y-MM-dd'),
    isDone: true,
  },
];

class TasksDB {
  constructor (arr) {
    this.tasks = [...arr];
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

  module.exports = tasksDbInstace;