import React, { Component } from 'react';

import './DataBirth.css';

type TformProps = { [key: string]: unknown };

type TdataBirth = {
  dataNumber: Date;
};

export default class DataBirth extends Component<TformProps, TdataBirth> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ dataNumber: new Date(event.target.value) });
  };

  render() {
    return (
      <div>
        <label className="form-item" htmlFor="dataBirth">
          Birth data:
          <input className="form-item__element" type="date" onChange={this.handleChange} />
        </label>
      </div>
    );
  }
}
