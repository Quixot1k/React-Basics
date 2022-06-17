import React, { Component } from "react";
import axios from "axios";
export default class Search extends Component {
  handleSearch = () => {
    // get input from users
    const keyWord = this.keyWordBox.value;
    this.props.updateAppState({ init: false, loading: true });
    // send msgs
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      (response) => {
        // console.log('Success', response.data)
        this.props.updateAppState({
          loading: false,
          users: response.data.items,
          err: "",
        });
      },
      (error) => {
        // console.log('Fail', error)
        this.props.updateAppState({ loading: false, err: error.message });
      }
    );
  };

  render() {
    return (
      <section className="jumbotron" style={{ textAlign: "center" }}>
        <h2 className="jumbotron-heading">Search Github Users</h2>
        <br />
        <div>
          <input
            ref={(curNode) => (this.keyWordBox = curNode)}
            type="text"
            placeholder=" Type into key words"
          />
          &nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    );
  }
}
