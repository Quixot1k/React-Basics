import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { onMouse: false };

  // mouse hover
  handleMouse = (isOnMouse) => {
    return () => {
      this.setState({ onMouse: isOnMouse });
    };
  };

  // choose or cancel a plan
  handleCheck = (token) => {
    return (event) => {
      this.props.checkTodo(token, event.target.checked);
    };
  };

  // delete a plan
  handleDelete = (token) => {
    return () => {
      if (window.confirm("Are you sure ?")) {
        this.props.deleteTodo(token);
      }
    };
  };

  render() {
    const { token, name, done } = this.props;
    return (
      <li
        style={{ backgroundColor: this.state.onMouse ? "#eee" : "#fff" }}
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleCheck(token)}
          />
          <span> {name} </span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.onMouse ? "block" : "none" }}
          onClick={this.handleDelete(token)}
        >
          Delete
        </button>
      </li>
    );
  }
}
