import express from 'express'
import { TaskController } from '../controllers/taskController.js';
const router = express.Router();

const database = new TaskController();

router.get("/", async (req, res) => {
    const tasks = await database.listTasks();

    return res.json(tasks);
})

router.post("/create", async (req, res) => {
    const {name, description, opened, closed} = req.body;

    try {

        await database.createTask({
            name,
            description,
            opened,
            closed,
        })
    
        return res.status(201).json({message: "task created"});
    } catch (error) {
        return res.json({error: error.message})
    }
});

router.delete("/delete/:id", async (req, res) => {
    const taskId = req.params.id;

    try {
        await database.deleteTask(taskId)
        return res.status(200).json({message: "task deleted"}).send()
    } catch (error) {
        return res.json({error: error.message})
    }
})

export default router;