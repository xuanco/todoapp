import React, { Component } from "react";
import "./TodoInput.css";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleAddItem } = this.props;
    return (
      <div className="input-container">
        <input type="text" value={item} onChange={handleChange} placeholder="Nhập công việc..." />
        <button onClick={handleAddItem}>Add</button>
      </div>
    );
  }
}

export default TodoInput;