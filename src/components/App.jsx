// import s from './App.module.css';
import { Suspense, lazy } from 'react';
// import SharedLayout from './SharedLayout';

// import { HomePage } from 'Pages/HomePage';
// import { Movies } from 'Pages/MoviesPage';
import { Nav } from './Nav/Nav';
import { Outlet, Route, Routes } from 'react-router-dom';
// import { MovieDetails } from 'Pages/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';

const HomePage = lazy(() => import('../Pages/HomePage'));
const Movies = lazy(() => import('../Pages/MoviesPage'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const SharedLayout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export const App = () => {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <SharedLayout fallback={<h1>Loading...</h1>}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

// export class App extends Component {
//   state = {
//     query: '',
//     page: 1,
//   };

//   changeQuery = query => {
//     this.setState({ query, page: 1 });
//     // console.log(query);
//   };

//   handleLoadMore = () => {
//     // console.log('handleLoadMore');
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };

//   render() {
//     // console.log(this.state.query);
//     const { query, page } = this.state;
//     return (
//       <div className={s.App}>
//         <Searchbar onSubmit={this.changeQuery} />
//         <ImageGallery
//           query={query}
//           page={page}
//           onLoadMore={this.handleLoadMore}
//         />
//       </div>
//     );
//   }
// }
