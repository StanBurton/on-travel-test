import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Main from "../Main/Main";
import Actors from "../Actors/Actors";

import "./Task6.css";

export default class Task6 extends React.Component {
  render() {
    return (
      <Router>
        <div className="swapi-web">
          <ul className="list-group">
            <li className="list-group-item">
              <Link to="/main">Main</Link>
            </li>
            <li className="list-group-item">
              <Link to="/actors">Actors</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/actors">
              <Actors />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
