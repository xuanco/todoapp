import React from 'react';

const TodoList = ({ list }) => {
  return (
    <ul>
      {list.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;
