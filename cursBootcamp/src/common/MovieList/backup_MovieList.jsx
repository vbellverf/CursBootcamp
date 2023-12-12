import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-item" onClick={() => onMovieClick(movie)}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;