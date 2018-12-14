import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import DataListBasic from "./data-list/Basic";
import DataListCustom from "./data-list/Custom DataList";
import DataListPaginationLazyLoad from "./data-list/Pagination - Lazy Load";
import DataListPagination from "./data-list/Virtual Scroll";
import DataListVirtualScrollLazyLoad from "./data-list/Virtual Scroll - Lazy Load";
import DataListVirtualScroll from "./data-list/Virtual Scroll";

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
          <h2>DataList content</h2>
          <ul>
            <li>
              <Link to="/data-list/basic">basic</Link>
            </li>
            <li>
              <Link to="/data-list/custom">custom</Link>
            </li>
            <li>
              <Link to="/data-list/pagination-lazy-load">pagination-lazy-load</Link>
            </li>
            <li>
              <Link to="/data-list/pagination">pagination</Link>
            </li>
            <li>
              <Link to="/data-list/virtual-scroll-lazy-load">virtual-scroll-lazy-load</Link>
            </li>
            <li>
              <Link to="/data-list/virtual-scroll">virtual-scroll</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>DataList content</h2>
        <Route path="/data-list/basic" component={DataListBasic} />
        <Route path="/data-list/custom" component={DataListCustom} />
        <Route path="/data-list/pagination-lazy-load" component={DataListPaginationLazyLoad} />
        <Route path="/data-list/pagination" component={DataListPagination} />
        <Route path="/data-list/virtual-scroll-lazy-load" component={DataListVirtualScrollLazyLoad} />
        <Route path="/data-list/virtual-scroll" component={DataListVirtualScroll} />
      </div>
    );
  }
}

export default App;
