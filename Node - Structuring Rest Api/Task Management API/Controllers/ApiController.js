const TaskManagementModel = require('../Models/TaskManagementModel');

const getTasks = async (req, res) => {
    let task = await TaskManagementModel.find();
    res.json({
        task: task,
        msg: "Task List Displayed Successfully!"
    });
};

const createOrModifyTask = async (req, res) => {
    const { id, name, detail, assigned, status, priority, deadline, created, updated } = req.body;

    let data;
    if (id) {
        // Update the task if `id` is provided
        data = await TaskManagementModel.findByIdAndUpdate(id, {
            name: name,
            detail: detail,
            assigned: assigned,
            status: status,
            priority: priority,
            deadline: deadline,
            updatedOn: Date.now(),
        }, { new: true });
    } else {
        // Create a new task if `id` is not provided
        data = new TaskManagementModel({
            name: name,
            detail: detail,
            assigned: assigned,
            status: status,
            priority: priority,
            deadline: deadline,
            created: created,
            updated: updated
        });
        await data.save();
    }

    res.json({
        msg: id ? "Task updated successfully!" : "Task added successfully!",
        data: data
    });
};

const deleteTask = async (req, res) => {
    let id = req.params.id;
    let data = await TaskManagementModel.findByIdAndDelete(id);
    if (data) {
        res.json({ msg: "Task deleted successfully!" });
    } else {
        res.status(404).json({ msg: "Task not found!" });
    }
};

const RetriveTaskById = async (req, res) => {
    let id = req.params.id;
    let data = await TaskManagementModel.findById(id);
    if (data) {
        res.json({ data: data, msg: "Task fetched successfully!" });
    } else {
        res.status(404).json({ msg: "Task not found!" });
    }
};

module.exports = { getTasks, createOrModifyTask, deleteTask, RetriveTaskById };
