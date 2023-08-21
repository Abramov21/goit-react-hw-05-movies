import s from './ListFilms.module.css';
import { useCallback, useEffect, useState } from 'react';
import { ItemFilms } from './itemFilms/itemFilms';

export const ListFilms = ({ movies, title }) => {
  const [state, setState] = useState([]);

  const likeMovies = useCallback(
    () => JSON.parse(localStorage.getItem('likeMovie')) || [],
    []
  );

  useEffect(() => {
    setState(likeMovies);
    console.log('рендер ліст філм');
  }, [likeMovies, state]);

  return (
    <div className={s.box}>
      {title && <h1 className={s.mainTitle}>Movies Trending</h1>}
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
            />
          );
        })}
      </ul>
    </div>
  );
};
