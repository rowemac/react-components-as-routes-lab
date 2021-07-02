import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map( movie => {
          return <div key={movie.title}>
            <h3>{movie.title}</h3>
            <p>Length: {movie.time}</p>
            <p>Genres: </p>
            <ul>
              {" " + movie.genres.join(', ')}
            </ul>
          <hr></hr>
        </div>
        })}
    </div>
  );
};

export default Movies;

