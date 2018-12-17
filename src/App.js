import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import LayoutBasic from "./layout/Basic";
import LayoutSide from "./layout/Side";
import LayoutSplit from "./layout/Split";
import LayoutApp from "./layout/App";

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
          <h2>Layout content</h2>
          <ul>
            <li>
              <Link to="/layout/basic">basic</Link>
            </li>
            <li>
              <Link to="/layout/side">side</Link>
            </li>
            <li>
              <Link to="/layout/split">split</Link>
            </li>
            <li>
              <Link to="/layout/app">app</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Layout content</h2>
        <Route path="/layout/basic" component={LayoutBasic} />
        <Route path="/layout/side" component={LayoutSide} />
        <Route path="/layout/split" component={LayoutSplit} />
        <Route path="/layout/app" component={LayoutApp} />
      </div>
    );
  }
}

export default App;
