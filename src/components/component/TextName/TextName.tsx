import React, { Component } from 'react';

import './TextName.css';

type TformProps = { [key: string]: unknown };

type TtextNameState = {
  textName: string;
};

export default class TextName extends Component<TformProps, TtextNameState> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ textName: event.target.value });
  };

  render() {
    return (
      <div>
        <label className="form-item" htmlFor="name">
          Name:
          <input
            className="form-item__element"
            type="text"
            name="name"
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
