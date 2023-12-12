import React from 'react';
import './MovieDetails.css';
import { useParams } from 'react-router-dom';


const MovieDetails = ({ movie, onClose }) => {

  // Obtén el parámetro de ruta 'id'
  const { id } = useParams();

  

  if (!movie) {
    
    return <div>No hay información de la película</div>;
  }
  


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
      </div>
    </div>
  );
};

export default MovieDetails;
