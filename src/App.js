import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import FileButtonBasic from "./file-button/Basic";
import FuleButtonSelect from "./file-button/Select";

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
          <h2>FileButton content</h2>
          <ul>
            <li>
              <Link to="/file-button/basic">basic</Link>
            </li>
            <li>
              <Link to="/file-button/select">select</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>FileButton content</h2>
        <Route path="/file-button/basic" component={FileButtonBasic} />
        <Route path="/file-button/select" component={FuleButtonSelect} />
      </div>
    );
  }
}

export default App;
