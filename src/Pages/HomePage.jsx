import { useEffect, useState } from 'react';
// import {  Route, Router } from 'react-router-dom';
import { HomeList } from 'components/MoviesList/MoviesList';
import { getFilmTrending } from 'components/services/imageApi';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const { country } = useParams();

  useEffect(() => {
    getFilmTrending()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.log(err));

    // getFilmTrendings()
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err));
  }, []);
  return (
    <main>
      <h1>Film Trending</h1>
      {movies.length > 0 && <HomeList movies={movies} />}
    </main>
  );
};

// export const Home = () => {
//     return (
//       <main>
//         <h1>Welcome</h1>
//         <img src="https://via.placeholder.com/960x240" alt="" />
//         <p>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//           laboriosam placeat incidunt rem illum animi nemo quibusdam quia
//           voluptatum voluptate.
//         </p>
//       </main>
//     );
//   };
