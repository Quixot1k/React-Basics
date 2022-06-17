import React, { Component } from "react";
import store from "../../redux/store";
import {
  createAddAction,
  createMinusAction,
  createAddAsyncAction,
} from "../../redux/counterActionCreator";

export default class Counter extends Component {
  componentDidMount() {
    // detect the changes of State in redux
    store.subscribe(() => {
      this.setState({});
    });
  }
  add = () => {
    const val = this.selectNumber.value;
    store.dispatch(createAddAction(val * 1));
  };
  minus = () => {
    const val = this.selectNumber.value;
    store.dispatch(createMinusAction(val * 1));
  };
  addWhenOdd = () => {
    const val = this.selectNumber.value;
    if (store.getState() % 2 === 1) {
      store.dispatch(createAddAction(val * 1));
    }
  };
  addWhenEven = () => {
    const val = this.selectNumber.value;
    if (store.getState() % 2 === 0) {
      store.dispatch(createAddAction(val * 1));
    }
  };
  addAsync = () => {
    const val = this.selectNumber.value;
    const timer = 500;
    store.dispatch(createAddAsyncAction(val * 1, timer));
  };

  render() {
    return (
      <div>
        <h1>Result: {store.getState()}</h1>
        <select
          ref={(currentNode) => {
            this.selectNumber = currentNode;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.addWhenOdd}>+ when odd</button>
        <button onClick={this.addWhenEven}>+ when even</button>
        <button onClick={this.addAsync}>async +</button>
      </div>
    );
  }
}
