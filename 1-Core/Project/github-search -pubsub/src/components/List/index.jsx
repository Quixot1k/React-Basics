import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    users: [],
    init: true,
    loading: false,
    err: "",
  };

  componentDidMount() {
    this.token = PubSub.subscribe("updateListState", (msg, stateObj) => {
      console.log("Reveive data from Search", stateObj);
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, init, loading, err } = this.state;
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
