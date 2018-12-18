import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import SwitchButtonBasic from "./switch-button/Basic";
import SwitchButtonState from "./switch-button/State";
import SwitchButtonStyle from "./switch-button/Style";

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
          <h2>SwitchButton content</h2>
          <ul>
            <li>
              <Link to="/switch-button/basic">basic</Link>
            </li>
            <li>
              <Link to="/switch-button/state">state</Link>
            </li>
            <li>
              <Link to="/switch-button/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>SwitchButton content</h2>
        <Route path="/switch-button/basic" component={SwitchButtonBasic} />
        <Route path="/switch-button/state" component={SwitchButtonState} />
        <Route path="/switch-button/style" component={SwitchButtonStyle} />
      </div>
    );
  }
}

export default App;
