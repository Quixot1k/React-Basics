import React, { Component } from "react";
import PubSub from "pubsub-js";

export default class Search extends Component {
  handleSearch = async () => {
    // get input from users
    const keyWord = this.keyWordBox.value;

    // // send pub & msgs
    // PubSub.publish('updateListState', {init: false, loading:true})
    // axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
    // 	response => {
    // 		// console.log('Success', response.data)
    // 		PubSub.publish('updateListState', {loading:false, users:response.data.items, err:''})
    // 	},
    // 	error => {
    // 		// console.log('Fail', error)
    // 		PubSub.publish('updateListState', {loading:false, err:error.message})
    // 	}
    // )

    // send pub & msgs
    PubSub.publish("updateListState", { init: false, loading: true });
    try {
      const response = await fetch(
        `https://api.github.com/search/users?q=${keyWord}`
      );
      const data = await response.json();
      PubSub.publish("updateListState", {
        loading: false,
        users: data.items,
        err: "",
      });
    } catch (error) {
      PubSub.publish("updateListState", { loading: false, err: error.message });
    }
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
