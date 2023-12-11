import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="movie-details">
      <div className="close-button" onClick={onClose}>
        &times;
      </div>
      <img className='posterPeli'
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="details">
        <h2>{movie.original_name}</h2>
        <p>{movie.overview}</p>
        {/* Posar mes coses */}
      </div>
    </div>
  );
};

export default MovieDetails;
