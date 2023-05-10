import { getFilmCasts } from 'components/services/imageApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    getFilmCasts(movieId)
      .then(data => {
        console.log(data);
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
      <div className={s.listCast}>
        {cast.map(({ character, id, original_name, profile_path }) => (
          <div className={s.listbox}>
            <div key={id} className={s.listCastItem}>
              {profile_path && (
                <img
                  width="120"
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={original_name}
                  className={s.image}
                />
              )}
              <p className={s.name}>{original_name}</p>
              <p className={s.name}>{character}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Cast;
