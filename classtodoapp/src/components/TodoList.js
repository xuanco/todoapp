import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { list } = this.props;
    return (
      <ul className="todo-list">
        {list.map((todo, index) => (
          <TodoItem key={index} todo={todo} />
        ))}
      </ul>
    );
  }
}

export default TodoList;