import express from 'express'
import { TaskController } from '../controllers/taskController.js';
import { TaskService } from '../services/taskService.js';
import { sql } from '../database/database.js';
const router = express.Router();

const taskService = new TaskService(sql);
const taskController = new TaskController(taskService);

router.get("/", (req, res) => taskController.listTasks(req, res))

router.post("/create", (req, res) => taskController.createTask(req, res));

router.delete("/:id", (req, res) => taskController.deleteTask(req, res));

router.put("/:id", (req, res) => taskController.updateTask(req, res));

export default router;