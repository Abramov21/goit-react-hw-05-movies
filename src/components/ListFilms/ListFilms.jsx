import { useEffect, useMemo, useState } from 'react';
import s from './ListFilms.module.css';
import { ItemFilms } from './itemFilms/itemFilms';

export const ListFilms = ({ movies, title }) => {
  return (
    <div className={s.box}>
      {title && <h1 className={s.mainTitle}>Movies Trending</h1>}
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path, vote_average }) => {
          return (
            <ItemFilms
              id={id}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
            />
          );
        })}
      </ul>
    </div>
  );
};
