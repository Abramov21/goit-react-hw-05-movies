import { Link, useLocation } from 'react-router-dom';
import s from './ListFilms.module.css';
import { useLocalStorageList } from 'hooks/useLocalStorageList';

export const ListFilms = ({ movies, title }) => {
  const location = useLocation();

  const [state, setState] = useLocalStorageList('likeMovie', []);

  const handleLikeButton = (id, title, poster_path, vote_average) => {
    const movies = JSON.parse(localStorage.getItem('likeMovie'));
    const movie = { id, title, poster_path, vote_average };
    let isMovieId = movies.findIndex(({ id }) => id === movie.id);
    if (isMovieId >= 0) {
      const newMovies = movies.filter(({ id }) => id !== movie.id);
      setState(newMovies);
    } else {
      setState(prev => [...state, movie]);
    }
    // (isMovieId === -1) {
    // }
  };

  return (
    <div className={s.box}>
      {title && <h1 className={s.mainTitle}>Movies Trending</h1>}
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path, vote_average }) => {
          const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const notFindImage =
            'https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg';
          return (
            <li key={id} className={s.list__item}>
              <button
                className={s.buttonLike}
                onClick={() =>
                  handleLikeButton(id, title, poster_path, vote_average)
                }
              >
                Like
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
                  <img
                    width="300"
                    src={imgPath}
                    alt={title}
                    className={s.image}
                  />
                )}
                <div className={s.box_title}>
                  <p className={s.text_name}>{title}</p>
                  <p className={s.text_average}>{vote_average.toFixed(1)}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
