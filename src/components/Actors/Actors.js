import React from "react";

import AddNewActor from "../AddNewActor/AddNewActor";

import "./Actors.css";

export default class Actors extends React.Component {
  _id = 500;

  _url = `https://swapi.co/api/people/`;

  state = {
    people: [],
  };

  componentDidMount() {
    this.getPeople();
  }

  async getResource(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`could not fetch ${url} , received ${res.status}`);
    }
    const body = await res.json();
    return body.results;
  }

  async getPeople() {
    const res = await this.getResource(this._url);
    this.setState({
      people: res.map(el => {
        const id = this._id++;
        const name = el.name;
        return { name, id };
      }),
    });
  }

  onAddItem = text => {
    this.setState(({ people }) => {
      const item = { name: text, id: this._id++ };
      const newArray = [item, ...people];
      return {
        people: newArray,
      };
    });
  };

  onDelete = id => {
    this.setState(({ people }) => {
      const idx = people.findIndex(el => el.id === id);
      const newArray = [...people.slice(0, idx), ...people.slice(idx + 1)];
      return {
        people: newArray,
      };
    });
  };

  render() {
    const people = this.state.people;
    const itemsPeople = people.map(el => {
      return (
        <li key={el.id} className="list-group-item">
          {el.name}
          <i className="fa fa-trash-o" onClick={() => this.onDelete(el.id)} />
        </li>
      );
    });

    return (
      <div className="actors">
        <div className="item-block">
          <AddNewActor onAddItem={this.onAddItem} />
        </div>
        <ul className="list-group actors-ul d-flex flex-column">
          {itemsPeople}
        </ul>
      </div>
    );
  }
}
