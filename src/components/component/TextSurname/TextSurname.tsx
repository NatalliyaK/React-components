import React, { Component } from 'react';

import './TextSurname.css';

type TformProps = { [key: string]: unknown };

type TtextSurname = {
  textSurname: string;
};

export default class TextSurname extends Component<TformProps, TtextSurname> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ textSurname: event.target.value });
  };

  render() {
    return (
      <div>
        <label className="form-item" htmlFor="surname">
          Surname:
          <input
            className="form-item__element"
            type="text"
            name="surname"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
