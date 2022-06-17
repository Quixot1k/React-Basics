import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addActionCreator,
  minusActionCreator,
  addAsyncActionCreator,
} from "../../redux/actions/counterAction";

class CounterUI extends Component {
  add = () => {
    const val = this.selectNumber.value;
    this.props.add(val * 1);
  };
  minus = () => {
    const val = this.selectNumber.value;
    this.props.minus(val * 1);
  };
  addWhenOdd = () => {
    const val = this.selectNumber.value;
    if (this.props.counter % 2 === 1) {
      this.props.add(val * 1);
    }
  };
  addWhenEven = () => {
    const val = this.selectNumber.value;
    if (this.props.counter % 2 === 0) {
      this.props.add(val * 1);
    }
  };
  addAsync = () => {
    const time = 500;
    const val = this.selectNumber.value;
    this.props.addAsync(val * 1, time);
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.props.counter}</h2>
        <h2>Person Number: {this.props.personList.length}</h2>
        <select
          ref={(curNode) => {
            this.selectNumber = curNode;
          }}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
        <button onClick={this.addWhenOdd}>+(counter is Odd)</button>
        <button onClick={this.addWhenEven}>+counter is Even)</button>
        <button onClick={this.addAsync}>+(Async)</button>
      </div>
    );
  }
}

// // mapStateToProps
// const mapStateToProps = (state) => {
//   return { counter: state };
// };
// // mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//   return {
//     add: (data) => {
//       dispatch(addActionCreator(data));
//     },
//     minus: (data) => {
//       dispatch(addActionCreator(data));
//     },
//     addAsync: (data, time) => {
//       dispatch(addAsyncActionCreator(data, time));
//     },
//   };
// };

// const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterUI);

const CounterContainer = connect(
  // mapStateToProps
  (state) => ({ counter: state.counter, personList: state.personList }),
  // mapDispatchToProps
  {
    add: addActionCreator,
    minus: minusActionCreator,
    addAsync: addAsyncActionCreator,
  }
)(CounterUI);

export default CounterContainer;
