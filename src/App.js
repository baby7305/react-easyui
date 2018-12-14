import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import ComboBoxBasic from "./combo-box/Basic";
import ComboBoxAddons from "./combo-box/ComboBox Addons";
import ComboBoxLazyFiltering from "./combo-box//Lazy Filtering";
import ComboBoxMultipleSelect from "./combo-box/Multiple Select";
import ComboBoxPanelAlign from "./combo-box/Panel Align";
import ComboBoxVirtualScrollLazyLoad from "./combo-box/Virtual Scroll";
import ComboBoxVirtualScroll from "./combo-box/Virtual Scroll - Lazy Load";

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
          <h2>ComboBox content</h2>
          <ul>
            <li>
              <Link to="/combo-box/basic">basic</Link>
            </li>
            <li>
              <Link to="/combo-box/addons">addons</Link>
            </li>
            <li>
              <Link to="/combo-box/lazy-filtering">lazy-filtering</Link>
            </li>
            <li>
              <Link to="/combo-box/multiple-select">multiple-select</Link>
            </li>
            <li>
              <Link to="/combo-box/panel-align">panel-align</Link>
            </li>
            <li>
              <Link to="/combo-box/virtual-scroll-lazy-load">virtual-scroll-lazy-load</Link>
            </li>
            <li>
              <Link to="/combo-box/virtual-scroll">virtual-scroll</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />

        <h2>ComboBox content</h2>
        <Route path="/combo-box/basic" component={ComboBoxBasic} />
        <Route path="/combo-box/addons" component={ComboBoxAddons} />
        <Route path="/combo-box/lazy-filtering" component={ComboBoxLazyFiltering} />
        <Route path="/combo-box/multiple-select" component={ComboBoxMultipleSelect} />
        <Route path="/combo-box/panel-align" component={ComboBoxPanelAlign} />
        <Route path="/combo-box/virtual-scroll-lazy-load" component={ComboBoxVirtualScrollLazyLoad} />
        <Route path="/combo-box/virtual-scroll" component={ComboBoxVirtualScroll} />
      </div>
    );
  }
}

export default App;
