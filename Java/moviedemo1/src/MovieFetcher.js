import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rating } from '@mui/material';
import './MovieFetcher.css';

const MovieFetcher = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = '49a5508b99e54cbf67438655e1565e32';
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL); // Use axios to fetch data
        setMovies(response.data.results); // Set movies state with the fetched data
      } catch (error) {
        setError(error); // Set error state if there's an error
      } finally {
        setLoading(false); // Set loading to false when the request is complete
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Show loading state
  }

  if (error) {
    return <div className="error-message">Error: {error.message}</div>; // Show error message
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <img
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p className="movie-title">{movie.title}</p>
          <Rating
            name="movie-rating"
            value={movie.vote_average / 2}
            precision={0.5} 
            readOnly
          />
        </div>
      ))}
    </div>
  );
};

export default MovieFetcher;
