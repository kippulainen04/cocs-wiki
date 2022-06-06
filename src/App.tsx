import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { getData } from './utils/fetch.utils';
import { ReactComponent as ClassOfClans } from './components/assets/class.svg';
import { Snow } from './components/snow-confetti/snow-confetti';
import { styled } from '@mui/material';

export type Monster = {
    id: string;
    name: string;
    imageUrl: string;
    describtion: string;
  }

  const ClassFace = styled(ClassOfClans)({
    marginTop: '50px'
  });

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUser = async () => {
      const users = await getData<Monster[]>('https://kippulainen04.github.io/Data/cocs_wiki.geojson');
      setMonsters(users)
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  useEffect(() => {
    Snow();
}, [])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <ClassFace />
      <h3 className='app-title'>Class of Clans Wiki-Cards</h3>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;