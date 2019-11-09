import React from "react";

import "./Task2.css";

export default class Task2 extends React.Component {
  constructor() {
    super();
    this.initUrl =
      "http://любой_домен/filter?size=S&color=1,2&manufacturer=aaa,eee";
    this.state = {
      size: "M",
      color: ["1", "2"],
      manufacturer: ["aaa", "eee"],
      sellOut: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    const { sellOut, size, color, manufacturer } = this.state;
    if (sellOut === prevState.sellOut) {
      console.log(
        `http://любой_домен/filter?size=${size}&color=${
          color.length < 1 ? "null" : color.join(",")
        }&manufacturer=${manufacturer.join(",")}`
      );
    }
  }

  getData() {
    const url = this.initUrl;
    let sellOut = this.state.sellOut;

    let reg = /=[^&]*\w/gm;
    const size = url.match(reg)[0].slice(1);
    const color = url
      .match(reg)[1]
      .slice(1)
      .split(",");
    const manufacturer = url
      .match(reg)[2]
      .slice(1)
      .split(",");

    if (url.match(reg).length > 0) {
      sellOut = true;
    }

    this.setState({
      size,
      color,
      manufacturer,
      sellOut,
    });
  }

  sizeHandler = e => {
    const size = e.target.value;
    this.setState({
      size,
    });
  };

  addOrDeleteToArr(arr, value, propName) {
    if (arr.indexOf(value) < 0) {
      this.setState({
        [propName]: [...arr, value],
      });
      return;
    }
    const idx = arr.findIndex(el => el === value);
    const newArray = [...arr.slice(0, idx), ...arr.slice(idx + 1)];

    this.setState({
      [propName]: newArray,
    });
  }

  colorHandler = e => {
    const color = e.target.value;
    this.addOrDeleteToArr(this.state.color, color, "color");
  };

  manufacturerHandler = e => {
    const manufacturer = e.target.value;
    this.addOrDeleteToArr(
      this.state.manufacturer,
      manufacturer,
      "manufacturer"
    );
  };

  sellOutHandler = () => {
    this.setState(state => {
      return {
        sellOut: !state.sellOut,
      };
    });
  };

  isChecked(arr, value) {
    if (arr.indexOf(value) > -1) {
      return true;
    }
    return false;
  }

  render() {
    const { size, color, manufacturer, sellOut } = this.state;

    return (
      <div className="task2 row">
        <div className="col-md-12">
          <h4 className="text-success">Your Current Link:</h4>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="staticEmail"
            value={`http://любой_домен/filter?size=${size}&color=${
              color.length < 1 ? "null" : color.join(",")
            }&manufacturer=${manufacturer.join(",")}`}
          />
        </div>
        <form className="col-md-12">
          <div className="form-check form-check-inline radios">
            <span className="text-info mr-2">Size:</span>
            <input
              className="form-check-input radio-inline"
              id="size1"
              type="radio"
              name="size"
              value="S"
              onChange={this.sizeHandler}
              checked={size === "S"}
            />
            <label className="form-check-label mr-1" htmlFor="size1">
              S
            </label>
            <input
              className="form-check-input radio-inline"
              type="radio"
              name="size"
              value="M"
              id="size2"
              onChange={this.sizeHandler}
              checked={size === "M"}
            />
            <label className="form-check-label mr-1" htmlFor="size2">
              M
            </label>
            <input
              className="form-check-input radio-inline"
              type="radio"
              name="size"
              value="L"
              id="size3"
              onChange={this.sizeHandler}
              checked={size === "L"}
            />
            <label className="form-check-label mr-1" htmlFor="size3">
              L
            </label>
          </div>
          <div className="form-check form-check-inline checkboxes">
            <span className="text-info mr-2">Color:</span>
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="1"
              checked={this.isChecked(color, "1")}
              onChange={this.colorHandler}
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="2"
              checked={this.isChecked(color, "2")}
              onChange={this.colorHandler}
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="3"
              checked={this.isChecked(color, "3")}
              onChange={this.colorHandler}
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="4"
              checked={this.isChecked(color, "4")}
              onChange={this.colorHandler}
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="5"
              checked={this.isChecked(color, "5")}
              onChange={this.colorHandler}
            />
          </div>
          <div className="input-group select d-flex flex-column">
            <span className="text-info mr-2">Manufacturer:</span>
            <select
              className="custom-select rounded"
              name="manufacturer"
              id="manufacturer"
              multiple
              value={manufacturer}
              onChange={this.manufacturerHandler}
            >
              <option value="aaa">aaa</option>;<option value="b&c">b&c</option>;
              <option value="ddd">ddd</option>;<option value="eee">eee</option>;
            </select>
          </div>
          <div className="form-check form-check-inline sell-out">
            <span className="text-info mr-2">Sell-out:</span>
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="sell-out"
              value="1"
              onChange={this.sellOutHandler}
              checked={sellOut}
            />
          </div>
        </form>
      </div>
    );
  }
}
