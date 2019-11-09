import React from "react";

import "./Task1.css";

export default class Task1 extends React.Component {
  
  state = {
    text: "",
    isValue: false,
  };

  initText = "Xxxx";

  inputHandler = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  render() {
    const isValue = this.state.text === this.initText ? "form-control green" : "form-control red";

    return (
      <div className="task1">
        <input
          onChange={this.inputHandler}
          className={isValue}
          type="text"
          value={this.state.text}
          placeholder={this.initText}
          id="input-form"
        />
      </div>
    );
  }
}
