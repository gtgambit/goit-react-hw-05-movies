import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: '44d416356c22cc8e7735ee915c193364',
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('/trending/movie/day', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get('/search/movie/', {
    params: {
      query,
    },
  });
  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getReviewsById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data;
};

export const getCastById = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data;
};
///
