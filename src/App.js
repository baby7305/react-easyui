import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import PaginationBasic from "./pagination/Basic";
import PaginationLayout from "./pagination/Layout";

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
          <h2>Pagination content</h2>
          <ul>
            <li>
              <Link to="/pagination/basic">basic</Link>
            </li>
            <li>
              <Link to="/pagination/layout">layout</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Pagination content</h2>
        <Route path="/pagination/basic" component={PaginationBasic} />
        <Route path="/pagination/layout" component={PaginationLayout} />
      </div>
    );
  }
}

export default App;
