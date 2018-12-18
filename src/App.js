import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TextBoxAddon from "./text-box/Addon";
import TextBoxBasic from "./text-box/Basic";
import TextBoxMultiline from "./text-box/Multiline"

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
          <h2>TextBox content</h2>
          <ul>
            <li>
              <Link to="/text-box/addon">addon</Link>
            </li>
            <li>
              <Link to="/text-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/text-box/multiline">multiline</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>TextBox content</h2>
        <Route path="/text-box/addon" component={TextBoxAddon} />
        <Route path="/text-box/basic" component={TextBoxBasic} />
        <Route path="/text-box/multiline" component={TextBoxMultiline} />
      </div>
    );
  }
}

export default App;
