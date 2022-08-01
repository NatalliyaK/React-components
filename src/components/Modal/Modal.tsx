import React, { Component } from 'react';
import './Modal.css';

type TmodalClose = {
  showModal: boolean;
};

type TmodalPanelProps = {
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
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default class Modal extends Component<TmodalPanelProps, TmodalClose> {
  state = {
    showModal: true,
  };

  closeModal = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const isShow = this.state.showModal ? 'show' : 'd-none';
    return (
      <div className={isShow}>
        <div className="modal">
          <div className="modal-container">
            <button className="close-modal" onClick={this.closeModal}>
              &times;
            </button>
            <p>Name: {this.props.cardData.name}</p>
            <p>Birth year: {this.props.cardData.birth_year} </p>
            <p>Mass : {this.props.cardData.mass}</p>
            <p>Hair color: {this.props.cardData.hair_color}</p>
            <p>Gender: {this.props.cardData.gender}</p>
            <p>Skin color: {this.props.cardData.skin_color}</p>
          </div>
        </div>
      </div>
    );
  }
}
