// Search.jsx
import './Search.css';
import React, { useState } from 'react';
import MovieList from '../../common/MovieList/MovieList';
import { searchMovies } from '../../services/movieService'; // Ajusta la ruta según tu estructura
import { Navigate, useNavigate } from 'react-router-dom'; // Importa useNavigate

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate(); // Obtiene la función navigate de react-router-dom

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
    // Navega a la página de detalles con el ID de la película
    navigate(`/movie/${movie.id}`);
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
      <MovieList movies={searchResults} onMovieClick={handleMovieClick} />
    </div>
  );
};

export default Search;
