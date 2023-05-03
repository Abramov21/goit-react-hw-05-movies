import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.module.css';

export const HomeList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  return <>{movies.length > 0 && <ListFilms movies={movies} />}</>;
};

HomeList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
