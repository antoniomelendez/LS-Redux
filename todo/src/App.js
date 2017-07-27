import React, { Component } from 'react';
import TodoList from '../containers/todo-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo List:<h1>
        <TodoList></TodoList>
      </div>
    );
  }
}

export default App;
