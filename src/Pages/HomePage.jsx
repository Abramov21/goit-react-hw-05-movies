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
