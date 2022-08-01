import React, { Component } from 'react';
import StarWarsService from '../component/StarWarsService/StarWarsService';
import CardList from '../CardList';
import Modal from '../Modal/Modal';
import './SearchPanel.css';
import Spiner from '../Spiner/Spiner';

type TsearchPanelState = {
  value: string;
  isLoaded: boolean;
  error: boolean;
  showModal: boolean;
  selectedNumber: number;
  data: {
    name: string;
    birth_year: string;
    eye_color: string;
    height: string;
    mass: string;
    hair_color: string;
    gender: string;
    skin_color: string;
  }[];
};

type TsearchPanelProps = { [key: string]: unknown };

export default class SearchPanel extends Component<TsearchPanelProps, TsearchPanelState> {
  constructor(props: TsearchPanelProps) {
    super(props);
    this.state = {
      value: '',
      isLoaded: false,
      error: false,
      data: [],
      showModal: false,
      selectedNumber: 0,
    };
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  StarWarsService = new StarWarsService();

  componentDidMount() {
    const searchQuery = localStorage.getItem('searchQuery') ?? '';

    if (searchQuery) {
      this.setState({ value: searchQuery });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.value);
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    this.StarWarsService.getSearchResults(searchValue).then((response) => {
      this.setState({ data: response.results });
    });
    this.setState({ value: event.target.value });
  };

  handleModal = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const clickedButton = event.currentTarget;
    this.setState({ showModal: !this.state.showModal });
    this.setState({
      selectedNumber: parseInt(
        typeof clickedButton.dataset.cardNumber === 'string' ? clickedButton.dataset.cardNumber : ''
      ),
    });
  };

  render() {
    if (this.state.isLoaded) {
      <Spiner />;
    } else {
      return (
        <>
          <form className="search" onSubmit={this.handleSubmit}>
            <input
              className="search-control"
              type="text"
              placeholder="Search"
              onChange={this.handleChange}
              value={this.state.value}
            />
          </form>
          {Object.keys(this.state.data).map((item, i) => (
            <div className="card-list" key={i}>
              <CardList cardData={this.state.data[i]} />
              <button
                className="card-list__button"
                onClick={this.handleModal}
                data-card-number={item}
              >
                {' '}
                Show more{' '}
              </button>
            </div>
          ))}
          {this.state.showModal && (
            <Modal
              onClick={this.handleModal}
              cardData={this.state.data[this.state.selectedNumber]}
            />
          )}
        </>
      );
    }
  }
}
