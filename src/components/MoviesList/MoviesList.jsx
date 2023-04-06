import { Link, useLocation } from 'react-router-dom';

export const HomeList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location.state}>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
