import { useEffect, useState } from 'react';
import { getFilmTrending } from 'components/services/imageApi';
import { ListFilms } from 'components/ListFilms/ListFilms';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const { country } = useParams();

  useEffect(() => {
    getFilmTrending()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <main>
      {movies.length > 0 && (
        <ListFilms movies={movies} title="Movies Trending" />
      )}
    </main>
  );
};

export default HomePage;
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
