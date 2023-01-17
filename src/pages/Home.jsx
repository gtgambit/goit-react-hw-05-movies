import React, { useEffect, useState } from 'react';

import Loader from '../components/Loader/Loader';
import { getTrendingMovies } from 'services/api';
import css from '../App.module.css';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const getTrending = async () => {
      try {
        setIsLoading(true);
        const TrendingMovies = await getTrendingMovies();

        setMoviesData(TrendingMovies.results);
      } catch (error) {
        setErrors(error.message);
        console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };
    getTrending();
  }, [errors]); // componentDidMount

  return (
    <div className={css.mainWrapper}>
      <h2>Trending today</h2>
      <ul>
        {isLoading && <Loader />}
        <MovieList movies={moviesData} />
      </ul>
    </div>
  );
};

export default Home;
