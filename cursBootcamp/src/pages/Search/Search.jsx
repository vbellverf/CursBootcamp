import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleInputChange} />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;
