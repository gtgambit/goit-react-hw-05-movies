import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.films}>
      {movies.map(({ id, title }) => {
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
  );
};

MovieList.propTypes = {
  Movies: PropTypes.array,
};
