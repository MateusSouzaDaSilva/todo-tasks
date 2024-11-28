import express from 'express'
import { listTasks } from '../controllers/taskController.js';
const router = express.Router();

router.get("/", listTasks)

// app.post("/tasks/create", createTask)


export default router;