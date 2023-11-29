// TaskList.js
import React from 'react';
import TaskItem from '../Components/TaskItem';

const TaskList = ({ tasks, onRemove }) => (
  <div className="task-list">
    {tasks.map((task, index) => (
      <TaskItem key={index} task={task} onRemove={() => onRemove(index)} />
    ))}
  </div>
);

export default TaskList;
