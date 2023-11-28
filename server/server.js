const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT =  5000;

app.use(bodyParser.json());
app.use(cors());

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/tasks', upload.array('attachments', 5), taskController.createTask);

mongoose.connect('mongodb://localhost:27017/Tasks', { useNewUrlParser: true, useUnifiedTopology: true })
.then(console.log("connected successfully"))
.catch((err)=>console.log("failed to connect "))

app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
