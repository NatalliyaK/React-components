import React, { useState } from 'react';

import Card from '../Card/Card';
import ReactHooksForm, { TformValues } from '../ReactHooksForm/ReactHooksForm';

import './ReactForm.css';

const ReactForm = () => {
  const [characters, setCharacters] = useState([
    {
      name: '',
      surname: '',
      data: new Date(),
      country: '',
      gender: '',
      agree: false,
      // picture: new FileList,
      error: '',
    },
  ]);

  const addCharacter = (character: TformValues) => {
    setCharacters((characters: TformValues[]) => [...characters, character]);
  };

  return (
    <div>
      <Card cardsData={characters} />
      <ReactHooksForm addCharacter={addCharacter} />
    </div>
  );
};

export default ReactForm;
