import PropTypes from 'prop-types';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { getMovieById } from 'services/api';
import css from './MovieDetails.module.css';

//Cast = lazy(() => import('./Cast'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(movieId);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const location = useLocation();
  const backLinkHref = location?.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) return;

    const getMovieDetails = async movieId => {
      try {
        setIsLoading(true);
        let MovieDataById = await getMovieById(movieId);
        const genres = MovieDataById.genres.map(el => el.name);

        MovieDataById.genres = genres;
        setMovieDetails(MovieDataById);
      } catch (error) {
        setErrors(error.message);
        console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <main>
      {isLoading && <Loader />}
      <Link to={backLinkHref}>Go back</Link>
      <div className={css.DetailsWrapper}>
        <div className={css.ImageWrapper}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
        <div className={css.MovieDetails}>
          <h2>{movieDetails.title}</h2>
          <p>User score: {movieDetails.vote_average}</p>
          <p>
            Overview: <br /> {movieDetails.overview}
          </p>
          <p>Genres:{movieDetails.genres}</p>
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
