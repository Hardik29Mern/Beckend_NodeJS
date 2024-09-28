const express = require('express');
const router = express.Router();

const { getTasks, createOrModifyTask, deleteTask, RetriveTaskById } = require('../Controllers/ApiController');

router.get("/tasks", getTasks);
router.post("/create", createOrModifyTask);
router.patch("/update/:id", createOrModifyTask);
router.delete("/delete/:id", deleteTask);
router.get("/task/:id", RetriveTaskById);

module.exports = router;