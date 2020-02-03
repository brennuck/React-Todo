import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

const data = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: data,
      anotherOne: ''
    }
  }

  addTodo = newTodoText => {
    const newTodo = {
      task: newTodoText,
      id: Date.now(),
      completed: false
    };
    this.setState({
      data: [...this.state.data, newTodo]
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoForm addItem = {this.addTodo} />
        <TodoList data = {this.state.data} />
        <Todo data = {this.state.data} />
      </div>
    );
  }
}

export default App;
