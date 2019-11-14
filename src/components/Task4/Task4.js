import React from "react";

import "./Task4.css";

export default class Task4 extends React.Component {
  _domainTwo = "https://fake-web-ot.herokuapp.com/";
  myRef = React.createRef();

  componentDidMount() {
    window.onmessage = function(e) {
      if (e.origin === "https://fake-web-ot.herokuapp.com") {
        console.log("data", e.data);
      }
    };
  }

  storageAction = action => {
    const iframe = this.myRef.current;

    const obj = {
      name: "from domain-one",
    };

    const req = function(action) {
      iframe.contentWindow.postMessage(
        JSON.stringify({ key: "storage", method: action, data: obj }),
        "*"
      );
    };

    switch (action) {
      case "get":
        req("get");
        break;
      case "set":
        req("set");
        console.log("localStorage item setted");
        break;
      case "remove":
        req("remove");
        console.log("localStorage item removed");
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="task4">
        <div className="d-flex flex-row justify-content-center">
          <button
            onClick={() => this.storageAction("get")}
            className="btn btn-info"
          >
            Get
          </button>
          <button
            onClick={() => this.storageAction("set")}
            className="btn btn-success mx-1"
          >
            Set
          </button>
          <button
            onClick={() => this.storageAction("remove")}
            className="btn btn-danger"
          >
            Remove
          </button>
        </div>
        <iframe
          ref={this.myRef}
          src={this._domainTwo}
          title="second-domain"
          name="second-domain"
        ></iframe>
        <a
          className="text-dark text-center mt-2"
          href="https://github.com/Stassras/iframe-for-ontravel-task/blob/master/home.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          The iframe code is here.
        </a>
      </div>
    );
  }
}
