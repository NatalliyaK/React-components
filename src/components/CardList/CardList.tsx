import React, { Component } from 'react';

import './CardList.css';

type TcardProps = {
  cardData: {
    name: string;
    birth_year: string;
    eye_color: string;
    height: string;
    mass: string;
    hair_color: string;
    gender: string;
    skin_color: string;
  };
};

export default class CardList extends Component<TcardProps> {
  render() {
    return (
      <div className="card-list">
        <div key={this.props.cardData.name} className="card-list__container">
          <p className="description">Name:{this.props.cardData.name}</p>
          <p className="description">Birth year:{this.props.cardData.birth_year}</p>
          <p className="description">Eye color:{this.props.cardData.eye_color}</p>
          <p className="description">Height:{this.props.cardData.height}</p>
        </div>
      </div>
    );
  }
}
