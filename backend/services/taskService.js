export class TaskService {
  constructor(database) {
    this.database = database;
  }

  async createTask(task) {
    const { name, description, opened, closed } = task;

    return await this
      .database`insert into tasks (name, description) VALUES (${name}, ${description})`;
  }

  async listTasks() {
    return await this.database`select * from tasks`;
  }

  async deleteTask(id) {
    return await this.database`delete from tasks where id = ${id}`;
  }

  async updateTask(id, task) {
    const [currentTask] = await this.database`select * from tasks where id = ${id}`

    if (!currentTask) {
        throw new Error('Task not found');
    }

    const updatedTask = {
        name: task.name === undefined ? currentTask.name : task.name,
        description: task.description === undefined ? currentTask.description : task.description,
        opened: task.opened === undefined ? currentTask.opened : task.opened,
        closed: task.closed === undefined ? currentTask.closed : task.closed
    };

    return await this.database`
        UPDATE tasks 
        SET name = ${updatedTask.name},
            description = ${updatedTask.description},
            opened = ${updatedTask.opened},
            closed = ${updatedTask.closed}
        WHERE id = ${id}
`;
  }
}
