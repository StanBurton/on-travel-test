import React from "react";
import ReactDOMServer from "react-dom/server";

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
    const isValue =
      this.state.text === this.initText
        ? "form-control"
        : "form-control red";

    const input = (
      <input
        onChange={this.inputHandler}
        className={isValue}
        type="text"
        value={this.state.text}
        placeholder={this.initText}
        id="input-form"
        maxLength="80"
      />
    );

    return (
      <div className="task1">
        {input}
        <p className="text-muted mt-2">{ReactDOMServer.renderToString(input)}</p>
      </div>
    );
  }
}
