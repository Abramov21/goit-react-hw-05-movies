import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export const HomeList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  return (
    <ul className={s.list}>
      {movies.map(({ id, title, poster_path, vote_average }) => {
        const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
        return (
          <li key={id} className={s.list__item}>
            <div className={s.box_item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={s.link}
              >
                <img
                  width="300"
                  src={imgPath}
                  alt={title}
                  className={s.image}
                />
                <div className={s.box_title}>
                  <p className={s.text_name}>{title}</p>
                  <p className={s.text_average}>{vote_average.toFixed(1)}</p>
                </div>
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

HomeList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
