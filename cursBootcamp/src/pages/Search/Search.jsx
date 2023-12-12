import React, { useState } from 'react';
import MovieList from '../../common/MovieList/MovieList';
import { searchMovies } from '../../services/movieService';
import MovieDetails from '../MovieDetails/MovieDetails'; // Importa el componente MovieDetails
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const results = await searchMovies(query);
      setSearchResults(results);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleMovieDetailsClick = (movieId) => {
    // Navega a la página de detalles con el ID de la película
    navigate(`/movie/${movieId}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar películas..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>

      <h2>Resultados de la búsqueda:</h2>
      <MovieList
        movies={searchResults}
        onMovieClick={handleMovieClick}
      />

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Search;