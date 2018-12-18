import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import SliderBasic from "./slider/Basic";
import SliderRange from "./slider/Range";
import SliderRule from "./slider/Rule";
import SliderVertical from "./slider/Vertical";

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
          <h2>Slider content</h2>
          <ul>
            <li>
              <Link to="/slider/basic">basic</Link>
            </li>
            <li>
              <Link to="/slider/range">range</Link>
            </li>
            <li>
              <Link to="/slider/rule">rule</Link>
            </li>
            <li>
              <Link to="/slider/vertical">vertical</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Slider content</h2>
        <Route path="/slider/basic" component={SliderBasic} />
        <Route path="/slider/range" component={SliderRange} />
        <Route path="/slider/rule" component={SliderRule} />
        <Route path="/slider/vertical" component={SliderVertical} />
      </div>
    );
  }
}

export default App;
