import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import TagBoxAutocomplete from "./tag-box/Autocomplete";
import TagBoxBasic from "./tag-box/Basic";
import TagBoxStyle from "./tag-box/Style";

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
          <h2>TagBox content</h2>
          <ul>
            <li>
              <Link to="/tag-box/autocomplete">autocomplete</Link>
            </li>
            <li>
              <Link to="/tag-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/tag-box/style">style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>TagBox content</h2>
        <Route path="/tag-box/autocomplete" component={TagBoxAutocomplete} />
        <Route path="/tag-box/basic" component={TagBoxBasic} />
        <Route path="/tag-box/style" component={TagBoxStyle} />
      </div>
    );
  }
}

export default App;
