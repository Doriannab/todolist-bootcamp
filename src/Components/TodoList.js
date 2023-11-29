// TodoList.js
import React, { useState } from 'react';
import TaskList from '../Components/TaskList';
import AddTaskForm from '../Components/AddTaskForm';
import Image from "../group.png";
import { HiOutlinePencilAlt } from "react-icons/hi";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
    <div className="dop">
    <img src={Image} alt='' className="image"/>
      <h1 className="titre">− TO-DO NOW −</h1>
      </div>
      <div className="crise">— <HiOutlinePencilAlt /> —</div>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} />
      
    </div>
  );
};

export default TodoList;
