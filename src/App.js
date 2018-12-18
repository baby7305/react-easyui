import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import SplitButtonBasic from "./split-button/Basic";
import SplitButtonState from "./split-button/State";

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
          <h2>SplitButton content</h2>
          <ul>
            <li>
              <Link to="/split-button/basic">basic</Link>
            </li>
            <li>
              <Link to="/split-button/state">state</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>SplitButton content</h2>
        <Route path="/split-button/basic" component={SplitButtonBasic} />
        <Route path="/split-button/state" component={SplitButtonState} />
      </div>
    );
  }
}

export default App;
