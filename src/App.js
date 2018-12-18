import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TabsBasic from "./tabs/Basic";
import TabsCustomHeader from "./tabs/Custom Header";
import TabsPosition from "./tabs/Position";
import TabsScrollable from "./tabs/Scrollable";
import TabsStyle from "./tabs/Style";
import TabsDropDown from "./tabs/Tabs with DropDown";

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
          <h2>Tabs content</h2>
          <ul>
            <li>
              <Link to="/tabs/basic">basic</Link>
            </li>
            <li>
              <Link to="/tabs/custom-header">custom-header</Link>
            </li>
            <li>
              <Link to="/tabs/position">position</Link>
            </li>
            <li>
              <Link to="/tabs/scrollable">scrollable</Link>
            </li>
            <li>
              <Link to="/tabs/style">style</Link>
            </li>
            <li>
              <Link to="/tabs/tabs-drop-down">tabs-drop-down</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Tabs content</h2>
        <Route path="/tabs/basic" component={TabsBasic} />
        <Route path="/tabs/custom-header" component={TabsCustomHeader} />
        <Route path="/tabs/position" component={TabsPosition} />
        <Route path="/tabs/scrollable" component={TabsScrollable} />
        <Route path="/tabs/style" component={TabsStyle} />
        <Route path="/tabs/tabs-drop-down" component={TabsDropDown} />
      </div>
    );
  }
}

export default App;
