import s from './App.module.css';
import { Suspense, lazy } from 'react';
// import SharedLayout from './SharedLayout';

// import { HomePage } from 'Pages/HomePage';
// import { Movies } from 'Pages/MoviesPage';
import { Nav } from './Nav/Nav';
import { Outlet, Route, Routes, Navigate } from 'react-router-dom';
import FavouriteMovies from './FavouriteMovies/FavouriteMovies';
// import { MovieDetails } from 'Pages/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import('../Pages/HomePage'));
const Movies = lazy(() => import('../Pages/MoviesPage'));
// const FavoriatMovies = lazy(() => import('../Pages/MoviesPage'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const SharedLayout = () => {
  return (
    <div className={s.app}>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Favourite-Movies" element={<FavouriteMovies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
