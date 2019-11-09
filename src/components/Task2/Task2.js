import React from "react";

import "./Task2.css";

export default class Task2 extends React.Component {
  render() {
    return (
      <div className="task2">
        <form>
          <div className="form-check form-check-inline radios">
            <span className="text-info mr-2">Size:</span>
            <input
              className="form-check-input radio-inline"
              id="size1"
              type="radio"
              name="size"
              value="S"
              checked={true}
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
              checked={true}
              data-color="red"
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="2"
              checked={true}
              data-color="green"
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="3"
              checked={true}
              data-color="yellow"
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="4"
              checked={true}
              data-color="teal"
            />
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="color"
              value="5"
              checked={true}
              data-color="blue"
            />
          </div>
          <div className="input-group select d-flex flex-column">
            <span className="text-info mr-2">Manufacturer:</span>
            <select
              className="custom-select rounded"
              name="manufacturer"
              id="manufacturer"
              multiple
            >
              <option value="aaa" selected={true}>
                aaa
              </option>
              <option value="b&c" selected={true}>
                b&c
              </option>
              <option value="ddd" selected={true}>
                ddd
              </option>
              <option value="eee" selected={true}>
                eee
              </option>
            </select>
          </div>
          <div className="form-check form-check-inline sell-out">
            <span className="text-info mr-2">Sell-out:</span>
            <input
              className="form-check-input checkbox-inline"
              type="checkbox"
              name="sell-out"
              value="1"
              checked={true}
            />
          </div>
        </form>
      </div>
    );
  }
}
