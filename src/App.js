import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import SideMenuBasic from "./side-menu/Basic";
import SideMenuStyle from "./side-menu/Style";

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
          <h2>SideMenu content</h2>
          <ul>
            <li>
              <Link to="/side-menu/basic">basic</Link>
            </li>
            <li>
              <Link to="/side-menu/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>SideMenu content</h2>
        <Route path="/side-menu/basic" component={SideMenuBasic} />
        <Route path="/side-menu/style" component={SideMenuStyle} />
      </div>
    );
  }
}

export default App;
