import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Jokes from "./components/Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink className="link" to="/">
            Home
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink className="link" to="/register">
            SignUp
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink className="link" to="/login">
            Login
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink className="link" to="/jokes">
            Jokes
          </NavLink>
          &nbsp; | &nbsp;
          <NavLink onClick={this.logout} className="link" to="/">
            Logout
          </NavLink>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
        <h4>Be the Coolest dad at the party!</h4>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem("token");
  };
}
function Home(props) {
  return (
    <div>
      <h1>Dad Jokes</h1>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/81wsBZ5kgOL._UY445_.jpg"
        alt="Very Cool Dad"
      />
    </div>
  );
}

export default App;
