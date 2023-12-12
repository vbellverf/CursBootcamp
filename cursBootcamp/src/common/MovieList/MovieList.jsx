import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h3>{movie.title}</h3>
          <button onClick={() => onMovieClick(movie)}>Seleccionar</button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
