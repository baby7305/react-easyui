import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import About from "./home/About";
import Index from "./home/Home";
import Users from "./home/Users";

import AccordionBasic from "./accordion/Basic";
import AccordionCustom from "./accordion/Custom";
import AccordionDynamic from "./accordion/Dynamic";
import AccordionMultiple from "./accordion/Multiple";
import AccordionStyle from "./accordion/Style";

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

            <li>
              <Link to="/accordion/basic">Accordion-Basic</Link>
            </li>
            <li>
              <Link to="/accordion/custom">Accordion-Custom</Link>
            </li>
            <li>
              <Link to="/accordion/dynamic">Accordion-Dynamic</Link>
            </li>
            <li>
              <Link to="/accordion/multiple">Accordion-Multiple</Link>
            </li>
            <li>
              <Link to="/accordion/style">Accordion-Style</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <h2>accordion content</h2>
        <Route path="/accordion/basic" component={AccordionBasic} />
        <Route path="/accordion/custom" component={AccordionCustom} />
        <Route path="/accordion/dynamic" component={AccordionDynamic} />
        <Route path="/accordion/multiple" component={AccordionMultiple} />
        <Route path="/accordion/style" component={AccordionStyle} />
      </div>
    );
  }
}

export default App;
