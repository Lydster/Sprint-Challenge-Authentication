import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/register">SignUp</NavLink>
          &nbsp; | &nbsp;
          <NavLink to="/login">Login</NavLink>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/register" component={SignUp} />
        <Route path="/login" component={Login} />
        <h4>Be the Coolest dad at the party!</h4>
      </div>
    );
  }
}
function Home(props) {
  return <h1>Dad Jokes</h1>;
}

export default App;
