import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
