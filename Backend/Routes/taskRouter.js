const router = require('express').Router();
const { createTask, fetchAllTask, updateTaskById, deleteTaskById } = require('../controller/TaskController')



//To get all the task
router.get('/', fetchAllTask);

//To create a task
router.post('/', createTask)

//To update a task 
router.put('/:id', updateTaskById)

//To Delete a task 
router.delete('/:id', deleteTaskById)



module.exports = router