import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ""
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item.trim() !== "") {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.item],
        item: ""
      }));
    }
  };

  render() {
    return (
      <div className="app-container">
        <h1>Todo List</h1>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleAddItem={this.handleAddItem} />
        <TodoList list={this.state.list} />
      </div>
    );
  }
}

export default App;
