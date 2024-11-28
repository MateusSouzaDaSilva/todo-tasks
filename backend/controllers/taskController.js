import { sql } from "../database/database.js";

export class TaskController {

    async listTasks() {
        const tasks = await sql`select * from tasks`;
        return tasks
    }

    async createTask(task) {
        const {name, description, opened, closed} = task;
        await sql`insert into tasks (name, description) VALUES (${name}, ${description})`
    }

    async deleteTask(id) {
        await sql`delete from tasks where id = ${id}`
    }
}