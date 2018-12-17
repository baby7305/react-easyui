import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import PanelBasic from "./panel/Basic";
import PanelHeaderFooter from "./panel/Header-Footer";

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
          <h2>Panel content</h2>
          <ul>
            <li>
              <Link to="/panel/basic">basic</Link>
            </li>
            <li>
              <Link to="/panel/header-footer">header-footer</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Panel content</h2>
        <Route path="/panel/basic" component={PanelBasic} />
        <Route path="/panel/header-footer" component={PanelHeaderFooter} />
      </div>
    );
  }
}

export default App;
