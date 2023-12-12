// App.js
import React, { useState } from 'react';
import SearchComponent from './SearchComponent';
import MovieList from './MovieList'; // Supongamos que ya tienes un componente MovieList

const App = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    // Realizar la búsqueda en la API de TMDb
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=TU_API_KEY&query=${query}`);
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error al realizar la búsqueda:', error);
    }
  };

  return (
    <div>
      <h1>Buscador de Películas</h1>
      <SearchComponent onSearch={handleSearch} />
      <MovieList movies={searchResults} />
    </div>
  );
};

export default App;
