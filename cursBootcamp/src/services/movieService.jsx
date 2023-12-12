const API_KEY = "accc61299ab9777706ddd0c43a8ef8e7"; 

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('Error al buscar películas');
  }
};
