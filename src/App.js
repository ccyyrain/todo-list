import React, { Component } from 'react';
import './App.css';
import TodoHeader from './component/todoheader.js';
import TodoForm from './component/todoform.js';
import TodoList from './component/todolist.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel,faCheck } from '@fortawesome/free-solid-svg-icons'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



library.add(faStroopwafel,faCheck);

var todoItems = [];
todoItems.push({index: 1, value: "learn react", done: false});
todoItems.push({index: 2, value: "go shopping", done: true});
todoItems.push({index: 3, value: "buy flowers", done: true});


  
class App extends React.Component {
  constructor (props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = {todoItems: todoItems};
  }
  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length+1, 
      value: todoItem.newItemValue, 
      done: false
    });
    this.setState({todoItems: todoItems});
  }
  removeItem (itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({todoItems: todoItems});
  }
  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({todoItems: todoItems});  
  }
  render() {
    return (
      <div id="main">
        <TodoHeader />
        <TodoForm addItem={this.addItem} />
        <TodoList items={todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
        
      </div>
    );
  }
}

export default App;

