import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, init, loading, err } = this.props.appState;
    return (
      <div className="row">
        {init ? (
          <h2 style={{ textAlign: "center" }}>Welcome</h2>
        ) : loading ? (
          <h2 style={{ textAlign: "center" }}>Loading...</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          users.map((userObj) => {
            return (
              <div key={userObj.id} className="card">
                <a href={userObj.html_url} target=" blank">
                  <img
                    alt="avatar"
                    src={userObj.avatar_url}
                    style={{ width: "100px" }}
                  />
                </a>
                <p className="card-text">{userObj.login}</p>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
