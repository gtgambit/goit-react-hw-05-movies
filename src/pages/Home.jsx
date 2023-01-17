import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Loader from '../components/Loader/Loader';
import { getTrendingMovies } from 'services/api';
import css from '../App.module.css';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const location = useLocation();

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
        {Array.isArray(moviesData) &&
          moviesData.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link
                  className={css.item}
                  to={`/movies/${id}`}
                  state={{ from: location }}
                >
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
