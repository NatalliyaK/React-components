import React, { Component } from 'react';
import './Spiner.css';

export default class Spiner extends Component {
  render() {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
