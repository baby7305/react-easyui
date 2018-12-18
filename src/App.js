import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TreeGridBasic from "./tree-grid/Basic";
import TreeGridColumnGroup from "./tree-grid/Column Group";
import TreeGridFooterRows from "./tree-grid/Footer Rows";
import TreeGridFrozenColumn from "./tree-grid/Frozen Column";
import TreeGridCheckBox from "./tree-grid/TreeGrid CheckBox";

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
          <h2>TreeGrid content</h2>
          <ul>
            <li>
              <Link to="/tree-grid/basic">basic</Link>
            </li>
            <li>
              <Link to="/tree-grid/column-froup">column-froup</Link>
            </li>
            <li>
              <Link to="/tree-grid/footer-rows">footer-rows</Link>
            </li>
            <li>
              <Link to="/tree-grid/frozen-column">frozen-column</Link>
            </li>
            <li>
              <Link to="/tree-grid/check-box">check-box</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>TreeGrid content</h2>
        <Route path="/tree-grid/basic" component={TreeGridBasic} />
        <Route path="/tree-grid/column-froup" component={TreeGridColumnGroup} />
        <Route path="/tree-grid/footer-rows" component={TreeGridFooterRows} />
        <Route path="/tree-grid/frozen-column" component={TreeGridFrozenColumn} />
        <Route path="/tree-grid/check-box" component={TreeGridCheckBox} />

      </div>
    );
  }
}

export default App;
