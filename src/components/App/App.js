import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Task1 from "../Task1/Task1";
import Task2 from "../Task2/Task2";
import Task3 from "../Task3/Task3";
import Task4 from "../Task4/Task4";
import Task5 from "../Task5/Task5";
import Task6 from "../Task6/Task6";

import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="on-travel-test-app container">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/">Task 1</Link>
            </li>
            <li className="list-group-item">
              <Link to="/task2">Task 2</Link>
            </li>
            <li className="list-group-item">
              <Link to="/task3">Task 3</Link>
            </li>
            <li className="list-group-item">
              <Link to="/task4">Task 4</Link>
            </li>
            <li className="list-group-item">
              <Link to="/task5">Task 5</Link>
            </li>
            <li className="list-group-item">
              <Link to="/task6">Task 6</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/task2">
              <Task2 />
            </Route>
            <Route path="/task3">
              <Task3 />
            </Route>
            <Route path="/task4">
              <Task4 />
            </Route>
            <Route path="/task5">
              <Task5 />
            </Route>
            <Route path="/task6">
              <Task6 />
            </Route>
            <Route path="/">
              <Task1 />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
