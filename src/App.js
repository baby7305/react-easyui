import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DateBoxBasic from "./date-box/Basic";
import DateBoxFormat from "./date-box/Date Format"

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
          <h2>DateBox content</h2>
          <ul>
            <li>
              <Link to="/date-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/date-box/format">format</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>DateBox content</h2>
        <Route path="/date-box/basic" component={DateBoxBasic} />
        <Route path="/date-box/format" component={DateBoxFormat} />
      </div>
    );
  }
}

export default App;
