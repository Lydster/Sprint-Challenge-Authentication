import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h3>list of jokes</h3>
        <div className="joke-list">
          {this.state.jokes.map(joke => {
            return (
              <div className="single-joke" key={joke.id}>
                {joke.joke}
              </div>
            );
          })}
        </div>
      </>
    );
  }

  componentDidMount() {
    const endpoint = "http://localhost:3300/api/jokes";
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error("JOKE ERROR", error);
      });
  }
}

export default requiresAuth(Jokes);
