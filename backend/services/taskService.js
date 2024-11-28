export class TaskService {
    constructor(database) {
        this.database = database;
    }

    async createTask(task) {
        const {name, description, opened, closed} = task;
        
        return await this.database`insert into tasks (name, description) VALUES (${name}, ${description})`
    }

    async listTasks() {
        return await this.database`select * from tasks`
    }

    async deleteTask(id) {
        return await this.database`delete from tasks where id = ${id}`
    }
}