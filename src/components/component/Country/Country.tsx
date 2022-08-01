import React, { Component } from 'react';

import './Country.css';

type TformProps = { [key: string]: unknown };

type Tcountry = {
  country: string;
};

export default class Country extends Component<TformProps, Tcountry> {
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ country: event.target.value });
  };
  render() {
    return (
      <div>
        <label className="form-item" htmlFor="country">
          Country:
          <select name="country" onChange={this.handleChange}>
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>
      </div>
    );
  }
}
