import { Link, useLocation } from 'react-router-dom';
import React, { useState, useMemo, useEffect } from 'react';
import sprite from '../../../image/symbol-defs.svg';
import clsx from 'clsx';
import s from '../ListFilms.module.css';

export const ItemFilms = React.memo(
  ({ id, title, poster_path, vote_average }) => {
    const [state, setState] = useState([]);

    const likeMovies = JSON.parse(localStorage.getItem('likeMovie')) || [];

    useEffect(() => {
      setState(likeMovies);
      console.log('рендер ліст філм');
    }, [likeMovies]);

    const isLike = state.some(movie => movie.id === id);

    const location = useLocation();
    const [isActive, setIsActive] = useState(isLike);

    const handleLikeButton = (id, title, poster_path, vote_average) => {
      setIsActive(true);

      const likeMovies = JSON.parse(localStorage.getItem('likeMovie')) ?? [];
      const movie = { id, title, poster_path, vote_average };
      let isMovieId = likeMovies.findIndex(({ id }) => id === movie.id);
      console.log(isMovieId);

      if (isMovieId >= 0) {
        setIsActive(false);

        const newMovies = likeMovies.filter(({ id }) => id !== movie.id);
        window.localStorage.setItem('likeMovie', JSON.stringify(newMovies));
      }

      if (isMovieId === -1) {
        const newLikeFilm = [...likeMovies, { ...movie, isActive: !isActive }];
        window.localStorage.setItem('likeMovie', JSON.stringify(newLikeFilm));
      }
    };

    const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
    const notFindImage =
      'https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg';

    return (
      <li key={id} className={s.list__item}>
        <button
          className={clsx(
            [s.buttonLike],
            { [s.active]: isActive },
            { inactive: !isActive }
          )}
          onClick={() => handleLikeButton(id, title, poster_path, vote_average)}
        >
          <svg className={s.buttonLikeIcon} width={15} height={15}>
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        </button>
        <Link
          to={`/movies/${id}`}
          state={{ from: location }}
          className={s.link}
        >
          {poster_path === null ? (
            <img
              width="300"
              src={notFindImage}
              alt={title}
              className={s.image}
            />
          ) : (
            <img width="300" src={imgPath} alt={title} className={s.image} />
          )}
          <div className={s.box_title}>
            <p className={s.text_name}>{title}</p>
            <p className={s.text_average}>{vote_average.toFixed(1)}</p>
          </div>
        </Link>
      </li>
    );
  }
);
