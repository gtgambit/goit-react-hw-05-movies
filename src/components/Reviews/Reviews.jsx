import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { getReviewsById } from '../../services/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const reviews = async movieId => {
      try {
        setIsLoading(true);
        const dataReviews = await getReviewsById(movieId);
        setReview(dataReviews.results);
      } catch (error) {
        setErrors(error.message);
        console.log(errors);
      } finally {
        setIsLoading(false);
      }
    };
    reviews(movieId);
  }, [movieId, errors]);

  return (
    <>
      <h3>Reviews</h3>
      {isLoading && <Loader />}
      {review.length > 0 ? (
        <ul>
          {review.map(review => {
            return (
              <li key={review.id} className={css.reviewContainer}>
                <p className={css.author}>
                  Author:
                  <span className={css.authorName}>{review.author}</span>
                </p>

                <div className={css.ContentContainer}>
                  <p className={css.ContentTitle}>Content:</p>
                  <span className={css.Content}>{review.content}</span>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={css.noReview}>Damn! No reviews for such movie!</p>
      )}
    </>
  );
};

export default Reviews;
