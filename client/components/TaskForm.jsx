import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, selectedTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    assignees: '',
    project: '',
    description: '',
    priority: 'Medium', // Default to Medium priority
    attachments: [],
  });

  useEffect(() => {
    if (selectedTask) {
      setFormData(selectedTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachments: e.target.files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataWithFiles = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'attachments') {
        Array.from(value).forEach((file, index) => {
          formDataWithFiles.append(`attachments`, file);
        });
      } else {
        formDataWithFiles.append(key, value);
      }
    });

    onSubmit(formDataWithFiles);
    setFormData({
      title: '',
      startDate: '',
      endDate: '',
      assignees: '',
      project: '',
      description: '',
      priority: 'Medium',
      attachments: [],
    });
  };

  return (
    <div className="mt-4">
      <h2 className="text-2xl mb-2">Task Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        {/* Other fields go here */}

        <div className="mb-4">
          <label htmlFor="priority" className="block text-sm font-medium text-gray-700">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <input
          type="file"
          name="attachments"
          onChange={handleFileChange}
          multiple
          className="mb-4"
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline-blue active:bg-blue-600"
        >
          {selectedTask ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;