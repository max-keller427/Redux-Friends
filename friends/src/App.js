import React, { Component } from "react";
import Login from "./components/Login";
import Protected from "./components/Protected";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <Route exact path="/protected" component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
