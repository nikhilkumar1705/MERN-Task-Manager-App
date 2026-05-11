require('dotenv').config();
require('./model/db.js');

const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 5000;

const taskRouter = require('./Routes/taskRouter.js');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Server Running.....");
});


app.use('/tasks', taskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});