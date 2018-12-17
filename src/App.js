import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import MenuBasic from "./menu/Basic";
import MenuContext from "./menu/Context";
import MenuStyle from "./menu/Style";

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
          <h2>Menu content</h2>
          <ul>
            <li>
              <Link to="/menu/basic">basic</Link>
            </li>
            <li>
              <Link to="/menu/context">context</Link>
            </li>
            <li>
              <Link to="/menu/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Menu content</h2>
        <Route path="/menu/basic" component={MenuBasic} />
        <Route path="/menu/context" component={MenuContext} />
        <Route path="/menu/style" component={MenuStyle} />
      </div>
    );
  }
}

export default App;
