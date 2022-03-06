import React from 'react';
import Spinner from '../ui/Spinner';
import CharacterCard from './CharacterCard';

const CharacterGrid = ({ characters, isLoading }) => {

  return isLoading ? ( 
    < Spinner /> 
    ) : (
    <section className='cards'>
      {
        characters.map((character) => (
          < CharacterCard key={character.char_id} character={character}/>
        ))
      }
    </section> );
};


export default CharacterGrid;