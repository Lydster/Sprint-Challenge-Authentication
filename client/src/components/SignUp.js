import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="input-card">
        <form onSubmit={this.signUp}>
          <div className="input-flex">
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
              placeholder="password"
            />
          </div>

          <div>
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    );
  }
  signUp = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/register";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("SIGNUP RESPONSE", res.data);

        localStorage.setItem("token", res.data.password);
      })
      .catch(error => {
        console.error("SIGNUP ERROR", error);
      });
  };
  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}

export default SignUp;
