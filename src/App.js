import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import MenuButtonAlign from "./menu-button/Align";
import MenuButtonBasic from "./menu-button/Basic";

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
          <h2>MenuButton content</h2>
          <ul>
            <li>
              <Link to="/menu-button/align">align</Link>
            </li>
            <li>
              <Link to="/menu-button/basic">basic</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>MenuButton content</h2>
        <Route path="/menu-button/align" component={MenuButtonAlign} />
        <Route path="/menu-button/basic" component={MenuButtonBasic} />
      </div>
    );
  }
}

export default App;
