import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="input-card">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
              value={this.state.username}
              onChange={this.handleChanges}
              id="username"
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
              value={this.state.password}
              onChange={this.handleChanges}
              id="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("LOGIN RESPONSE", res.data);
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.error("LOGIN ERROR", err);
      });
  };

  handleChanges = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}
export default Login;
