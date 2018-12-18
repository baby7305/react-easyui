import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TooltipBasic from "./tooltip/Basic";
import TooltipContent from "./tooltip/Content";
import TooltipPosition from "./tooltip/Position";
import TooltipTriggerEvent from "./tooltip/Trigger Event"

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
          <h2>Tooltip content</h2>
          <ul>
            <li>
              <Link to="/tooltip/basic">basic</Link>
            </li>
            <li>
              <Link to="/tooltip/content">content</Link>
            </li>
            <li>
              <Link to="/tooltip/position">position</Link>
            </li>
            <li>
              <Link to="/tooltip/trigger-event">trigger-event</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Tooltip content</h2>
        <Route path="/tooltip/basic" component={TooltipBasic} />
        <Route path="/tooltip/content" component={TooltipContent} />
        <Route path="/tooltip/position" component={TooltipPosition} />
        <Route path="/tooltip/trigger-event" component={TooltipTriggerEvent} />
      </div>
    );
  }
}

export default App;
