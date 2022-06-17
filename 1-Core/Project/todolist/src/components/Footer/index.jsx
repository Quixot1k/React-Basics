import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    return this.props.checkAllTodo(event.target.checked);
  };

  handleClearAllDone = () => {
    return this.props.clearAllDoneTodo();
  };

  render() {
    const { todos } = this.props;
    const doneCnt = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    const allCnt = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={doneCnt === allCnt && allCnt !== 0 ? true : false}
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>Finished:{doneCnt}</span> / Total:{allCnt}
        </span>
        <button onClick={this.handleClearAllDone} className="btn btn-danger">
          {" "}
          Clear Finished Tasks
        </button>
      </div>
    );
  }
}
