import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Loader } from './components/Loader/Loader';
import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const PageNotFound404 = lazy(() => import('pages/PageNotFound404'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound404 />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};
