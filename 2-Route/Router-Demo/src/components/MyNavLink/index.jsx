import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class About extends Component {
  render() {
    // console.log(this.props);
    return (
      <NavLink
        className={({ isActive }) =>
          isActive ? "list-group-item active" : "list-group-item"
        }
        {...this.props}
      />
    );
  }
}
