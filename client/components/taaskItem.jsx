import React from 'react';

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>Start Date: {task.startDate}</p>
      <p>End Date: {task.endDate}</p>
      {/* Display other task details */}
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
