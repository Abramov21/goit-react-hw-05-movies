import { Link, useLocation } from 'react-router-dom';
import s from './ListFilms.module.css';
export const ListFilms = ({ movies, title }) => {
  const location = useLocation();
  console.log(movies);
  return (
    <>
      <h1 className={s.mainTitle}>Movies Trending</h1>
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path, vote_average }) => {
          const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const notFindImage =
            'https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg';
          return (
            <li key={id} className={s.list__item}>
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
    </>
  );
};
