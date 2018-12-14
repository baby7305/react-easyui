import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import ComboGridBasic from "./combo-grid/Basic";
import ComboGridMultiple from "./combo-grid/Multiple ComboGrid";

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
          <h2>ComboGrid content</h2>
          <ul>
            <li>
              <Link to="/combo-grid/basic">basic</Link>
            </li>
            <li>
              <Link to="/combo-grid/multiple">multiple</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>ComboGrid content</h2>
        <Route path="/combo-grid/basic" component={ComboGridBasic} />
        <Route path="/combo-grid/multiple" component={ComboGridMultiple} />
      </div>
    );
  }
}

export default App;
