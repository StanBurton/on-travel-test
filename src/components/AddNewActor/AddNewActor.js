import React, { Component } from "react";

import "./AddNewActor.css";

export default class AddNewActor extends Component {
  state = {
    label: "",
  };

  onlabelChange = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label.length > 0) {
      this.props.onAddItem(this.state.label);
      this.setState({
        label: "",
      });
    }
  };

  render() {
    return (
      <form
        className="AddNewActor d-flex align-items-center mb-1"
        onSubmit={this.onSubmit}
      >
        <input
          type="text"
          className="form-control"
          onChange={this.onlabelChange}
          placeholder="Enter a new actor..."
          value={this.state.label}
          maxLength={30}
        />
        <button className="btn btn-success">Add Actor</button>
      </form>
    );
  }
}
