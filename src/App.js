import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DraggableBasic from "./draggable/Basic";
import DraggableConstrain from "./draggable/Constrain";
import DraggableHandle from "./draggable/Handle";

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
              <Link to="/draggable/basic">basic</Link>
            </li>
            <li>
              <Link to="/draggable/constrain">constrain</Link>
            </li>
            <li>
              <Link to="/draggable/handle">handle</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Dialog content</h2>
        <Route path="/draggable/basic" component={DraggableBasic} />
        <Route path="/draggable/constrain" component={DraggableConstrain} />
        <Route path="/draggable/handle" component={DraggableHandle} />
      </div>
    );
  }
}

export default App;
