import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const tasks = await getTasks();
    setTasks(tasks);
  };

  const handleCreateTask = async (taskData) => {
    await createTask(taskData);
    fetchTasks();
  };

  const handleUpdateTask = async (taskId, taskData) => {
    await updateTask(taskId, taskData);
    fetchTasks();
    setSelectedTask(null);
  };

  const handleDeleteTask = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="bg-blue-500 text-white min-h-screen p-8">
      <h1 className="text-4xl mb-4">Task Manager</h1>
      <TaskList tasks={tasks} onEdit={handleEditTask} onDelete={handleDeleteTask} />
      <TaskForm
        onSubmit={selectedTask ? (data) => handleUpdateTask(selectedTask._id, data) : handleCreateTask}
        selectedTask={selectedTask}
      />
    </div>
  );
};


export default App;
