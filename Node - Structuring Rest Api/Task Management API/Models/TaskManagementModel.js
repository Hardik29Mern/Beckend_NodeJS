const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/taskmanagementApi').then(() => console.log("Connected to the Database!"));

const schema = mongoose.Schema;

const TaskManagementSchema = new schema({
    name: {
        type: String
    },
    detail: {
        type: String
    },
    assigned: {
        type: String
    },
    status: {
        type: String,
        enum: ['pending', 'in progress', 'completed', 'on hold'],
        default: 'pending'
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium'
    },
    deadline: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

const TaskManagementModel = mongoose.model('TaskManagement', TaskManagementSchema);

module.exports = TaskManagementModel;