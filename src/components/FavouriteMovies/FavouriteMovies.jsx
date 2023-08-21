import s from './FavouriteMovies.module.css';
import { ItemFilms } from 'components/ListFilms/itemFilms/itemFilms';
import { useCallback, useEffect, useState } from 'react';

const FavouriteMovies = () => {
  const movies = JSON.parse(localStorage.getItem(`likeMovie`));

  const [state, setState] = useState([]);
  const [like, setLike] = useState(undefined);
  const likeMovies = useCallback(
    () => JSON.parse(localStorage.getItem('likeMovie')) || [],
    []
  );

  useEffect(() => {
    setState(likeMovies);
    console.log('рендер favourite філм');
  }, [likeMovies, like]);
  return (
    <>
      <h1 className={s.title}>Favourite movie</h1>
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path, vote_average }) => {
          const isLike = state.some(movie => movie.id === id);

          return (
            <ItemFilms
              key={id}
              id={id}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              isLike={isLike}
              setLike={setLike}
            />
          );
        })}
      </ul>
    </>
  );
};

export default FavouriteMovies;
