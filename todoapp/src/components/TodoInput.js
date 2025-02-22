import React from 'react';

const TodoInput = ({ item, handleChange, handleAddItem }) => {
  return (
    <div>
      <input type="text" value={item} onChange={handleChange} placeholder="Nhập công việc..." />
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
};

export default TodoInput;
