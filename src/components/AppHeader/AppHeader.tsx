import React, { Component } from 'react';
import './AppHeader.css';
import { Link } from 'react-router-dom';

export default class AppHeader extends Component {
  render() {
    return (
      <div className="header">
        <ul className="header-list">
          <li className="header-items__item">
            <Link to="/about">about</Link>
          </li>
          <li className="header-items__item">
            <Link to="/">card</Link>
          </li>
          <li className="header-items__item">
            <Link to="/error">error</Link>
          </li>
          <li className="header-items__item">
            <Link to="/form">form</Link>
          </li>
        </ul>
      </div>
    );
  }
}
