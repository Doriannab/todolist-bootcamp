// AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="add-task-form">
      <input className="input"
        type="text"
        placeholder="Ajouter une nouvelle tâche"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask} className="button">Add task</button>

      <hr className="dire" />
    </div>
    
  );
};

export default AddTaskForm;
