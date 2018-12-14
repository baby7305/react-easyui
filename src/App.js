import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DroppableBasic from "./droppable/Basic";
import DroppableShopping from "./droppable/Shopping";

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
          <h2>Droppable content</h2>
          <ul>
            <li>
              <Link to="/droppable/basic">basic</Link>
            </li>
            <li>
              <Link to="/droppable/shopping">shopping</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Droppable content</h2>
        <Route path="/droppable/basic" component={DroppableBasic} />
        <Route path="/droppable/shopping" component={DroppableShopping} />
      </div>
    );
  }
}

export default App;
