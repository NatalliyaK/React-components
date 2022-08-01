type TcharProps = {
  name: string;
  birth_year: string;
  eye_color: string;
  height: string;
  films: string;
};

export default class StarWarsService {
  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getSearchResults = async (quary: string) => {
    return await this.getResource(`https://swapi.dev/api/people/?search=${quary}`);
  };

  getAllCharacter = async () => {
    const res = await this.getResource('https://swapi.dev/api/people/');
    return res.map(this._transformCharecter);
  };

  getCharacter = async (id: number) => {
    const character = await this.getResource(`https://swapi.dev/api/people/${id}`);
    return this._transformCharecter(character);
  };

  _transformCharecter = (char: TcharProps) => {
    return {
      name: char.name,
      birth_year: char.birth_year,
      eye_color: char.eye_color,
      height: char.height,
      films: char.films,
    };
  };
}
