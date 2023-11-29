// TaskItem.js
import React, { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";

const TaskItem = ({ task, onRemove }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="task">
      {isEditing} 
        <div className="surprie">
          <input
            type="text"
            value={task}
            readOnly className="surprise"
          />
          <button className="dar" onClick={() => { setIsEditing(false); onRemove(task); }}><MdOutlineDeleteOutline className="del" /></button>
        </div>
        </div>
  );}
      
    



export default TaskItem;
