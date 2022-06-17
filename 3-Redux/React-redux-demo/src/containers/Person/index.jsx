import React, { Component } from "react";
import { connect } from "react-redux";
import { nanoid } from "nanoid";
import { addPersonActionCreator } from "../../redux/actions/personAction";

class PersonUI extends Component {
  addPerson = () => {
    const name = this.nameInput.value;
    const age = this.ageInput.value;
    if (name === "" || age === "") {
      alert("Please input name or age");
    } else {
      const personObj = { id: nanoid(), name, age };
      this.props.add_person(personObj);
      this.nameInput.value = "";
      this.ageInput.value = "";
    }
  };
  render() {
    return (
      <div>
        <h2>Counter Above: {this.props.counter}</h2>
        <input
          type="text"
          placeholder="name"
          ref={(curNode) => (this.nameInput = curNode)}
        />
        <input
          type="text"
          placeholder="age"
          ref={(curNode) => (this.ageInput = curNode)}
        />
        <button onClick={this.addPerson}>add a person</button>
        <ul>
          {this.props.personList.map((personObj) => {
            return (
              <li key={personObj.id}>
                {personObj.name} -- {personObj.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// mapStateToProps
const mapStateToProps = (state) => {
  return { personList: state.personList, counter: state.counter };
};

// mapDispatchToPros
const mapDispatchToPros = (dispatch) => {
  return {
    add_person: (data) => {
      dispatch(addPersonActionCreator(data));
    },
  };
};

const PersonContainer = connect(mapStateToProps, mapDispatchToPros)(PersonUI);

// const PersonContainer = connect(
//   // mapStateToProps
//   (state) => ({ personList: state.personList, counter: state.counter }),
//   // mapDispatchToProps
//   { add_person: addPersonActionCreator }
// )(PersonUI);

export default PersonContainer;
