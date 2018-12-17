import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import FormBasic from "./form/Basic";
import FormCustomRules from "./form/Custom-Rules";
import FormValidateTooltip from "./form/Validate-Tooltip";
import FormValidate from "./form/Validate"

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
          <h2>Form content</h2>
          <ul>
            <li>
              <Link to="/form/basic">basic</Link>
            </li>
            <li>
              <Link to="/form/custom-rules">custom-rules</Link>
            </li>
            <li>
              <Link to="/form/validate-tooltip">validate-tooltip</Link>
            </li>
            <li>
              <Link to="/form/validate">validate</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Form content</h2>
        <Route path="/form/basic" component={FormBasic} />
        <Route path="/form/custom-rules" component={FormCustomRules} />
        <Route path="/form/validate-tooltip" component={FormValidateTooltip} />
        <Route path="/form/validate" component={FormValidate} />
      </div>
    );
  }
}

export default App;
