import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

export default class Header extends Component {
  // prop types restriction
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    if (event.keyCode !== 13) {
      return;
    } else {
      if (event.target.value.trim() === "") {
        alert("Input can't be empty!");
        return;
      } else {
        const todoObj = {
          token: Date.now(),
          name: event.target.value,
          done: false,
        };
        this.props.addTodo(todoObj);
        event.target.value = "";
      }
    }
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="Please input your task name and enter"
        />
      </div>
    );
  }
}
