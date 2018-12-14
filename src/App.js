import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DialogBasic from "./dialog/Basic";
import DialogCustomStyle from "./dialog/Custom Dialog Style";
import DialogDraggableAndResizable from "./dialog/Draggable And Resizable";
import DialogNoBorder from "./dialog/No Border";
import DialogToolbarAndButton from "./dialog/Toolbar and Button";

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
          <h2>Dialog content</h2>
          <ul>
            <li>
              <Link to="/dialog/basic">basic</Link>
            </li>
            <li>
              <Link to="/dialog/custom-style">custom-style</Link>
            </li>
            <li>
              <Link to="/dialog/draggable-resizable">draggable-resizable</Link>
            </li>
            <li>
              <Link to="/dialog/no-border">no-border</Link>
            </li>
            <li>
              <Link to="/dialog/toolbar-button">toolbar-button</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Dialog content</h2>
        <Route path="/dialog/basic" component={DialogBasic} />
        <Route path="/dialog/custom-style" component={DialogCustomStyle} />
        <Route path="/dialog/draggable-resizable" component={DialogDraggableAndResizable} />
        <Route path="/dialog/no-border" component={DialogNoBorder} />
        <Route path="/dialog/toolbar-button" component={DialogToolbarAndButton} />
      </div>
    );
  }
}

export default App;
