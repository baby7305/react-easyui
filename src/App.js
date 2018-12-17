import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import MessagerAlert from "./messager/Alert";
import MessagerCustom from "./messager/Custom";
import MessagerInteractive from "./messager/Interactive";

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
          <h2>Messager content</h2>
          <ul>
            <li>
              <Link to="/messager/alert">alert</Link>
            </li>
            <li>
              <Link to="/messager/custom">custom</Link>
            </li>
            <li>
              <Link to="/messager/interactive">interactive</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>Messager content</h2>
        <Route path="/messager/alert" component={MessagerAlert} />
        <Route path="/messager/custom" component={MessagerCustom} />
        <Route path="/messager/interactive" component={MessagerInteractive} />
      </div>
    );
  }
}

export default App;
