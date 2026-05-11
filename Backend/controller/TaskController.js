const TaskModel = require('../model/TaskModel');


//Create Task 
const createTask = async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({
            message: "Task is created",
            success: true
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Failed to create task',
            success: false
        });
    }
}

//Get all tasks
const fetchAllTask = async (req, res) => {
    try {
        const data = await TaskModel.find({});
        res.status(200).json({
            message: "All Tasks",
            success: true,
            data
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Failed to create task',
            success: false
        });
    }
}

//Edit or Updating
const updateTaskById = async (req, res) => {

    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };
        const data = await TaskModel.findByIdAndUpdate(id, obj);
        res.status(200).json({
            message: "Task Updated",
            success: true,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Failed to update task',
            success: false
        });
    }
}

//Delete TAsk 
const deleteTaskById = async (req, res) => {

    try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({
            message: "Task Delete",
            success: true,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: 'Failed to delete task',
            success: false
        });
    }
}


module.exports = {
    createTask,
    fetchAllTask,
    updateTaskById,
    deleteTaskById
}