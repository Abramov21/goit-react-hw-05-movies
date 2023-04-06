import { MovieDetailsInfo } from 'components/MovieDetailsInfo/MovieDetailsInfo';
import { getFilmDetals } from 'components/services/imageApi';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  //   console.log(useParams());
  useEffect(() => {
    getFilmDetals(movieId)
      .then(data => {
        setMovie(data);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);
  return (
    <main>
      <div>
        <MovieDetailsInfo movie={movie} />
        <Outlet />
      </div>
    </main>
  );
};
export default MovieDetails;
