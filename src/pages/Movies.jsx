import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';

import { getMovieByQuery } from 'services/api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  //const query = searchParams.get('query') ?? '';

  const getMovieBySearchTerm = async searchTerm => {
    try {
      setIsLoading(true);
      const searchedMovies = await getMovieByQuery(searchTerm);
      setSearchedMovies(searchedMovies.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;

    getMovieBySearchTerm(searchQuery);
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery(event.target.elements[0].value);
    setSearchParams({ query: event.target.elements[0].value });
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input name="" type="text" placeholder="Enter movie name" required />
        <button type="submit">Search</button>
      </form>
      <div>
        <div>
          <ul>
            {isLoading && <Loader />}
            {Array.isArray(searchedMovies) &&
              searchedMovies.map(({ id, title }) => {
                return (
                  <li key={id}>
                    <Link className={css.item} to={`/movies/${id}`}>
                      {title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Movies;
