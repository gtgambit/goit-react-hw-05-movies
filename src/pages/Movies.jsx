import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { getMovieByQuery } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [errors, setErrors] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
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
    if (!query) return;
    getMovieBySearchTerm(query);
  }, [query, errors]);

  const handleSubmit = event => {
    event.preventDefault();
    if (event.target.elements[0].value.trim().toLowerCase() === '') {
      alert('Please, enter correct name!');
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
            <MovieList movies={searchedMovies} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Movies;
