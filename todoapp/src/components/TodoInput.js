import React from "react";
import "./TodoInput.css";

const TodoInput = ({ item, handleChange, handleAddItem }) => {
  return (
    <div className="input-container">
      <input type="text" value={item} onChange={handleChange} placeholder="Nhập công việc..." />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default TodoInput;