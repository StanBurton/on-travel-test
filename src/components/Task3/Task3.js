import React from "react";

import "./Task3.css";

export default class Task3 extends React.Component {
  state = {
    people: [],
    planets: [],
  };

  makeRequest(method, url) {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          const res = JSON.parse(this.response).results;
          resolve(res);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText,
          });
        }
      };
      xhr.onerror = function() {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      };
      xhr.send();
    });
  }

  async sendRequest() {
    const [people, planets] = await Promise.all([
      this.makeRequest("GET", "https://swapi.co/api/people"),
      this.makeRequest("GET", "https://swapi.co/api/planets"),
    ]);
    console.log("Both responses received");
    alert("Both responses received");
    this.setState({
      people,
      planets,
    });
  }

  render() {
    const { people, planets } = this.state;

    console.log(people, planets);
    const itemsPeople = people.map(el => {
      return <li className="list-group-item">{el.name}</li>;
    });

    const itemsPlanets = planets.map(el => {
      return <li className="list-group-item">{el.name}</li>;
    });

    const button = (
      <button
        onClick={this.sendRequest.bind(this)}
        type="button"
        className="btn btn-primary btn-lg button"
      >
        Send Requests
      </button>
    );

    const ul = (
      <div className="row">
        <ul className="col-md-6 list-group people d-flex flex-column">
          <li className="list-group-item text-success">
            <h4>Peoples</h4>
          </li>
          {itemsPeople}
        </ul>
        <ul className="col-md-6 list-group planets d-flex flex-column">
          <li className="list-group-item text-success">
            <h4>Planets</h4>
          </li>
          {itemsPlanets}
        </ul>
      </div>
    );

    return (
      <div className="task3">
        <div className="text-center">
          {people.length < 1 && planets.length < 1 ? button : null}
        </div>
        {people.length > 0 && planets.length > 0 ? ul : null}
      </div>
    );
  }
}
