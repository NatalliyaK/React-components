import React, { Component } from 'react';
import './Card.css';

type TState = { [key: string]: unknown };

type TformProps = {
  cardsData: {
    name: string;
    surname: string;
    data: Date;
    country: string;
    gender: string;
    agree: boolean;
    // picture: FileList;
    error: string;
  }[];
};

export default class Card extends Component<TformProps, TState> {
  render() {
    return (
      <>
        {this.props.cardsData.map((itemCard) => {
          if (itemCard.name !== '') {
            return (
              <div key={itemCard.name} className="card">
                <p>Name: {itemCard.name}</p>
                <p>Surname: {itemCard.surname}</p>
                <p>
                  Data birth: {itemCard.data?.getDate()} {itemCard.data?.getMonth()}{' '}
                  {itemCard.data?.getFullYear()}
                </p>
                <p>Country: {itemCard.country}</p>
                <p>Gender: {itemCard.gender}</p>
              </div>
            );
          }
        })}
      </>
    );
  }
}
