import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import css from './Cast.module.css';

import { getCastById } from '../../services/api';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const getCast = async movieId => {
      try {
        setIsLoading(true);
        const cast = await getCastById(movieId);
        setCast(cast.cast);
      } catch (error) {
        setErrors(error.message);
        console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };
    getCast(movieId);
  }, [movieId]);

  if (!cast) return;

  return (
    <ul className={css.castContainer}>
      {isLoading && <Loader />}
      {cast.map(({ id, profile_path, original_name, character }) => {
        return (
          <li className={css.actorItem} key={id}>
            <div className={css.actorImg}>
              <img
                className={css.image}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : 'https://www.drupal.org/files/project-images/broken-image.jpg'
                }
                alt={original_name}
              />
            </div>
            <div className={css.actInfo}>
              <p className={css.actName}>{original_name}</p>
              <p className={css.actChar}>{character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
