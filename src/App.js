import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import ComboTreeBasic from "./combo-tree/Basic";
import ComboTreeMultiple from "./combo-tree/Multiple ComboTree";

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
          <h2>ComboTree content</h2>
          <ul>
            <li>
              <Link to="/combo-tree/basic">basic</Link>
            </li>
            <li>
              <Link to="/combo-tree/multiple">multiple</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>ComboTree content</h2>
        <Route path="/combo-tree/basic" component={ComboTreeBasic} />
        <Route path="/combo-tree/multiple" component={ComboTreeMultiple} />
      </div>
    );
  }
}

export default App;
