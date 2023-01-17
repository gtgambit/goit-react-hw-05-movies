import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieById } from 'services/api';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async movieId => {
      try {
        setIsLoading(true);
        let MovieDataById = await getMovieById(movieId);
        const genresName = MovieDataById.genres.map(el => el.name);

        MovieDataById.genres = genresName;
        setMovieDetails(MovieDataById);
      } catch (error) {
        setErrors(error.message);
        console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails(movieId);
  }, [movieId, errors]);

  const { poster_path, title, vote_average, overview, genres } = movieDetails;

  return (
    <main>
      {isLoading && <Loader />}
      <Link to={backLinkHref}>Go back</Link>
      <div className={css.DetailsWrapper}>
        <div className={css.ImageWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div className={css.MovieDetails}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <p>
            Overview: <br /> {overview}
          </p>
          <p>Genres: {Array.isArray(genres) && genres.map(el => el + ', ')}</p>
        </div>
      </div>
      Additional information
      <p>
        <Link to="cast" state={{ from: backLinkHref }}>
          Cast
        </Link>
      </p>
      <p>
        <Link to="reviews" state={{ from: backLinkHref }}>
          Review
        </Link>
      </p>
      <hr />
      <Outlet />
    </main>
  );
};

export default MovieDetails;
