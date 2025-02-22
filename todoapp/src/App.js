import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: ''
    };
  }

  handleChange = (event) => {
    this.setState({ item: event.target.value });
  };

  handleAddItem = () => {
    if (this.state.item.trim() !== '') {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.item],
        item: ''
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="Nhập công việc..."
          />
          <button onClick={this.handleAddItem}>Add</button>
        </div>
        <ul>
          {this.state.list.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
