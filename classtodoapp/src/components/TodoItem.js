import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    return <li className="todo-item">{this.props.todo}</li>;
  }
}

export default TodoItem;