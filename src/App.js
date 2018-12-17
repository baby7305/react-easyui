import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import ProgressBarBasic from "./progress-bar/Basic";
import ProgressBarShowValue from "./progress-bar/Show Value";
import ProgressBarStyle from "./progress-bar/Style";

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
          <h2>ProgressBar content</h2>
          <ul>
            <li>
              <Link to="/progress-bar/basic">basic</Link>
            </li>
            <li>
              <Link to="/progress-bar/show-value">show-value</Link>
            </li>
            <li>
              <Link to="/progress-bar/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>ProgressBar content</h2>
        <Route path="/progress-bar/basic" component={ProgressBarBasic} />
        <Route path="/progress-bar/show-value" component={ProgressBarShowValue} />
        <Route path="/progress-bar/style" component={ProgressBarStyle} />
      </div>
    );
  }
}

export default App;
