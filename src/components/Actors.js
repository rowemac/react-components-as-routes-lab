import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div key={actor.name}>
          <h3>{actor.name}</h3>
          <ul><strong>Movies</strong></ul>
          <ul>
            {actor.movies.map(movie => {
              return <li key={movie}>
                {movie}
              </li>
            })}
          </ul>
          <hr></hr>
        </div>
      })}
    </div>
  );
};

export default Actors;
