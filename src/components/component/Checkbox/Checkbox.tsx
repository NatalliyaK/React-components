import React, { Component } from 'react';

import './Checkbox.css';

type TformProps = { [key: string]: unknown };

type Tcheckbox = {
  checkbox: string;
};

export default class Checkbox extends Component<TformProps, Tcheckbox> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checkbox: event.target.value });
  };

  render() {
    return (
      <div>
        <label className="form-item" htmlFor="agree">
          agree to the processing of data
          <input type="checkbox" name="agree" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
