import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import SearchBoxBasic from "./search-box/Basic";
import SearchBoxCategory from "./search-box/Category";

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
          <h2>SearchBox content</h2>
          <ul>
            <li>
              <Link to="/search-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/search-box/category">category</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>SearchBox content</h2>
        <Route path="/search-box/basic" component={SearchBoxBasic} />
        <Route path="/search-box/category" component={SearchBoxCategory} />
      </div>
    );
  }
}

export default App;
