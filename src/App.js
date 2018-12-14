import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DateTimeSpinnerBasic from "./date-time-spinner/Basic";
import DateTimeSpinnerFormat from "./date-time-spinner/Format";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
          <h2>DateTimeSpinner content</h2>
          <ul>
            <li>
              <Link to="/date-time-spinner/basic">basic</Link>
            </li>
            <li>
              <Link to="/date-time-spinner/format">format</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>DateTimeSpinner content</h2>
        <Route path="/date-time-spinner/basic" component={DateTimeSpinnerBasic} />
        <Route path="/date-time-spinner/format" component={DateTimeSpinnerFormat} />
      </div>
    );
  }
}

export default App;
