import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import Loader from 'components/Loader/Loader';

import { getMovieByQuery } from 'services/api';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errors, setErrors] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  const getMovieBySearchTerm = async query => {
    try {
      setIsLoading(true);
      const searchedMovies = await getMovieByQuery(query);
      setSearchedMovies(searchedMovies.results);
    } catch (error) {
      setErrors(error.message);
      console.log(errors);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return;

    getMovieBySearchTerm(query);
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.elements[0].value.trim().toLowerCase() === '') {
      alert('Please, enter correct query!');
      return;
    }
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
