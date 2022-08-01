import React, { Component } from 'react';

import './Gender.css';

type TformProps = { [key: string]: unknown };

type Tgender = {
  gender: string;
};

export default class Gender extends Component<TformProps, Tgender> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ gender: event.target.value });
  };

  render() {
    return (
      <div>
        <label className="form-item" htmlFor="gender">
          Gender
          <input type="radio" value="male" name="gender" onChange={this.handleChange} /> Male
          <input type="radio" value="female" name="gender" onChange={this.handleChange} /> Female
        </label>
      </div>
    );
  }
}
