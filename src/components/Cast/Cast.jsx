import { getFilmCasts } from 'components/services/imageApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getFilmCasts(movieId)
      .then(data => {
        if (!data.cast.length) {
          alert('No cast info');
          return;
        }
        setCast(data.cast);
      })
      .catch(error => console.log(error.message));
  }, [movieId]);

  if (!cast.length) {
    return;
  }

  return (
    <>
      <h3>Cast</h3>
      <ul>
        {cast.map(({ character, id, original_name, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                width="120"
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
            )}
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
