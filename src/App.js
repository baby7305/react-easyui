import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TreeBasic from "./tree/Basic";
import TreeCheckBox from "./tree/CheckBox";
import TreeCustomNode from "./tree/Custom Node";
import TreeEditable from "./tree/Editable Tree";
import TreeLzayLoad from "./tree/Lazy Load";
import TreeNodeIcon from "./tree/Node Icon";
import TreeFiltering from "./tree/Tree Filtering";

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
          <h2>Tree content</h2>
          <ul>
            <li>
              <Link to="/tree/basic">basic</Link>
            </li>
            <li>
              <Link to="/tree/check-box">check-box</Link>
            </li>
            <li>
              <Link to="/tree/custom-node">custom-node</Link>
            </li>
            <li>
              <Link to="/tree/editable-tree">editable-tree</Link>
            </li>
            <li>
              <Link to="/tree/lazy-load">lazy-load</Link>
            </li>
            <li>
              <Link to="/tree/node-icon">node-icon</Link>
            </li>
            <li>
              <Link to="/tree/tree-filtering">tree-filtering</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Tree content</h2>
        <Route path="/tree/basic" component={TreeBasic} />
        <Route path="/tree/check-box" component={TreeCheckBox} />
        <Route path="/tree/custom-node" component={TreeCustomNode} />
        <Route path="/tree/editable-tree" component={TreeEditable} />
        <Route path="/tree/lazy-load" component={TreeLzayLoad} />
        <Route path="/tree/node-icon" component={TreeNodeIcon} />
        <Route path="/tree/tree-filtering" component={TreeFiltering} />
      </div>
    );
  }
}

export default App;
