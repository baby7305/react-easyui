import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TimeSpinnerBasic from "./time-spinner/Basic";
import TimeSpinnerRange from "./time-spinner/Range";
import TimeSpinnerStyle from "./time-spinner/Style"

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
          <h2>TimeSpinner content</h2>
          <ul>
            <li>
              <Link to="/time-spinner/basic">basic</Link>
            </li>
            <li>
              <Link to="/time-spinner/range">range</Link>
            </li>
            <li>
              <Link to="/time-spinner/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>TimeSpinner content</h2>
        <Route path="/time-spinner/basic" component={TimeSpinnerBasic} />
        <Route path="/time-spinner/range" component={TimeSpinnerRange} />
        <Route path="/time-spinner/style" component={TimeSpinnerStyle} />
      </div>
    );
  }
}

export default App;
