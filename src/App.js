import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import './App.css';

function App() {
  const [ characters, setCharacters ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('')

  useEffect(() => {
    const fetchCharacters = async() => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setCharacters(result.data)
      setIsLoading(false)
    }

    fetchCharacters()
  }, [query])


  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q) }/>
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
