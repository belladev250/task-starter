import React from 'react';
import TaskItem from './TaskForm';

const TaskList = ({ tasks, onEdit, onDelete }) => {
    return (
        <div className="mt-4">
          <h2 className="text-2xl mb-2">Task List</h2>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      );
};

export default TaskList;
