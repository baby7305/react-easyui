import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import NumberBoxAddons from "./number-box/Addons";
import NumberBoxBasic from "./number-box/Basic";
import NumberBoxFormat from "./number-box/Format";
import NumberBoxSpinAlign from "./number-box/Spin Align";
import NumberBoxSpinner from "./number-box/Spinner";

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
          <h2>NumberBox content</h2>
          <ul>
            <li>
              <Link to="/number-box/addons">addons</Link>
            </li>
            <li>
              <Link to="/number-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/number-box/format">format</Link>
            </li>
            <li>
              <Link to="/number-box/spin-align">spin-align</Link>
            </li>
            <li>
              <Link to="/number-box/spinner">spinner</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>NumberBox content</h2>
        <Route path="/number-box/addons" component={NumberBoxAddons} />
        <Route path="/number-box/basic" component={NumberBoxBasic} />
        <Route path="/number-box/format" component={NumberBoxFormat} />
        <Route path="/number-box/spin-align" component={NumberBoxSpinAlign} />
        <Route path="/number-box/spinner" component={NumberBoxSpinner} />
      </div>
    );
  }
}

export default App;
