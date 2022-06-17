import React, { Component } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

export default class App extends Component {
  state = {
    todos: [],
  };

  // Add a plan, --> Header
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  // Check a plan, --> List --> Item
  checkTodo = (token, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      if (todoObj.token === token) {
        return { ...todoObj, done };
      } else {
        return todoObj;
      }
    });
    this.setState({ todos: newTodos });
  };

  // Delete a plan --> List --> Item
  deleteTodo = (token) => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.token !== token;
    });
    this.setState({ todos: newTodos });
  };

  // Check all plans --> Footage
  checkAllTodo = (done) => {
    const { todos } = this.state;
    const newTodos = todos.map((todoObj) => {
      return { ...todoObj, done };
    });
    this.setState({ todos: newTodos });
  };

  // Clear all finished plans --> Footage
  clearAllDoneTodo = () => {
    const { todos } = this.state;
    const newTodos = todos.filter((todoObj) => {
      return !todoObj.done;
    });
    this.setState({ todos: newTodos });
  };

  render() {
    console.log(this.state);
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todos={todos}
            checkTodo={this.checkTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todos={todos}
            checkAllTodo={this.checkAllTodo}
            clearAllDoneTodo={this.clearAllDoneTodo}
          />
        </div>
      </div>
    );
  }
}
