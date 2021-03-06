import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }
    render () {
      var items = this.props.items.map((item, index) => {
        return (
          <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        );
      });
      return (
        <ul className="list-group"> {items} </ul>
      );
    }
  }
    
  class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
      this.onClickClose = this.onClickClose.bind(this);
      this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    }
    onClickDone() {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    }
    render () {
      var todoClass = this.props.item.done ? 
          "done" : "undone";
      return(
        <li className="list-group-item ">
          <div className={todoClass}>         
            <span aria-hidden="true" onClick={this.onClickDone}><FontAwesomeIcon icon="check" className="icon"/></span>
            {this.props.item.value}
            <button className="close" onClick={this.onClickClose}>&times;</button>
          </div>
        </li>     
      );
    }
  }

  export default TodoList;