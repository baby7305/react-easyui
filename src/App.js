import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import CalenderBasic from "./calender/Basic";
import CalenderDisableDate from "./calender/DisableDate";
import CalenderFirstDayOfWeek from "./calender/FirstDayOfWeek";
import CalenderWeekNumber from "./calender/WeekNumber";

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
          <h2>calender content</h2>
          <ul>
            <li>
              <Link to="/calender/basic">basic</Link>
            </li>
            <li>
              <Link to="/calender/disable-date">disable-date</Link>
            </li>
            <li>
              <Link to="/calender/first-day-of-week">first-day-of-week</Link>
            </li>
            <li>
              <Link to="/calender/week-number">week-number</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />

        <h2>calender content</h2>
        <Route path="/calender/basic" component={CalenderBasic} />
        <Route path="/calender/disable-date" component={CalenderDisableDate} />
        <Route path="/calender/first-day-of-week" component={CalenderFirstDayOfWeek} />
        <Route path="/calender/week-number" component={CalenderWeekNumber} />
      </div>
    );
  }
}

export default App;
