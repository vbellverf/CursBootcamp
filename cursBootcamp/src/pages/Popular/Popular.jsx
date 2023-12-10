//import './Popular.css'
import { useEffect, useState } from "react";

const API_KEY = "accc61299ab9777706ddd0c43a8ef8e7";

export default function Popular () {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch( `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`,
        )
          .then((response) => {
            if (response.status === 200) {
              return response.json();
            } else {
              console.error(response);
              throw new Error("alguna nosa ha anat malament");
            }
          })
          .then((data) => setData(data.results))
          .catch((error) => setError(error.message));

    }, []);

    return (
      <div className="movie-grid">
			  {data.map(movie => (
          <div className="movie-card" key={movie.id}>
          <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          />
          <div className="movie-title">{movie.original_name}</div>
          </div>
			  ))}
		  </div>
    )
}