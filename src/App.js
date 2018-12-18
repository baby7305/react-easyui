import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import VirtualScrollBasic from "./virtual-scroll/Basic";
import VirtualScrollLazyLoad from "./virtual-scroll/Lazy Load";

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
          <h2>VirtualScroll content</h2>
          <ul>
            <li>
              <Link to="/virtual-scroll/basic">basic</Link>
            </li>
            <li>
              <Link to="/virtual-scroll/lazy-load">lazy-load</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>VirtualScroll content</h2>
        <Route path="/virtual-scroll/basic" component={VirtualScrollBasic} />
        <Route path="/virtual-scroll/lazy-load" component={VirtualScrollLazyLoad} />
      </div>
    );
  }
}

export default App;
