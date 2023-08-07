import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import sprite from '../../../image/symbol-defs.svg';
import { useLocalStorageList } from 'hooks/useLocalStorageList';
import clsx from 'clsx';
import s from '../ListFilms.module.css';

export const ItemFilms = ({ id, title, poster_path, vote_average }) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useLocalStorageList('likeMovie', []);

  const handleLikeButton = (id, title, poster_path, vote_average) => {
    const likeMovies = JSON.parse(localStorage.getItem('likeMovie'));
    setIsActive(true);
    const movie = { id, title, poster_path, vote_average };
    let isMovieId = likeMovies.findIndex(({ id }) => id === movie.id);
    if (isMovieId >= 0) {
      const newMovies = likeMovies.filter(({ id }) => id !== movie.id);
      setIsActive(false);

      setState(newMovies);
    } else {
      setState(prev => [...state, movie]);
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
      <Link to={`/movies/${id}`} state={{ from: location }} className={s.link}>
        {poster_path === null ? (
          <img width="300" src={notFindImage} alt={title} className={s.image} />
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
};
