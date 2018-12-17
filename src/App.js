import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import LinkButtonBasic from "./link-button/Basic";
import LinkButtonGroup from "./link-button/Group";
import LinkButtonIconAlign from "./link-button/Icon-Align";
import LinkButtonPlain from "./link-button/Plain";
import LinkButtonSize from "./link-button/Size"
import LinkButtonStyle from "./link-button/Style";
import LinkButtonToggle from "./link-button/Toggle";

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
          <h2>LinkButton content</h2>
          <ul>
            <li>
              <Link to="/link-button/basic">basic</Link>
            </li>
            <li>
              <Link to="/link-button/group">group</Link>
            </li>
            <li>
              <Link to="/link-button/icon-align">icon-align</Link>
            </li>
            <li>
              <Link to="/link-button/plain">plain</Link>
            </li>
            <li>
              <Link to="/link-button/size">size</Link>
            </li>
            <li>
              <Link to="/link-button/style">style</Link>
            </li>
            <li>
              <Link to="/link-button/toggle">toggle</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>LinkButton content</h2>
        <Route path="/link-button/basic" component={LinkButtonBasic} />
        <Route path="/link-button/group" component={LinkButtonGroup} />
        <Route path="/link-button/icon-align" component={LinkButtonIconAlign} />
        <Route path="/link-button/plain" component={LinkButtonPlain} />
        <Route path="/link-button/size" component={LinkButtonSize} />
        <Route path="/link-button/style" component={LinkButtonStyle} />
        <Route path="/link-button/toggle" component={LinkButtonToggle} />
      </div>
    );
  }
}

export default App;
