import React from "react";

import "./Main.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <img
          className="rounded mx-auto d-block"
          src="https://ph-files.imgix.net/62758740-d453-4296-ac77-4eea57732bd5?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=608.68778280543&h=380&fit=max"
          alt="logo"
        />
      </div>
    );
  }
}
