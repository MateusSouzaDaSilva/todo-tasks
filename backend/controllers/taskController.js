import { sql } from "../database/database.js";

export class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }

    async listTasks(req, res) {
        const tasks = await this.taskService.listTasks();

        return res.status(200).json(tasks);
    }

    async createTask(req, res) {
        try {
            const task = req.body;

            await this.taskService.createTask(task);

            return res.status(201).json({ message: 'Task created successfully' }) 
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }

       
    }

    async deleteTask(req, res) {

        try {
            const { id } = req.params;

            await this.taskService.deleteTask(id);

            return res.status(201).json({message: 'Task deleted successfully'});
        } catch (error) {
            return res.status(500).json({ error: error.message});
        }

    }
}