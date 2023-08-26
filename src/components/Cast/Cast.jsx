import { getFilmCasts } from 'components/services/imageApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';
import { SwiperComponent } from 'components/swiper/swiper';
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
        <SwiperComponent cast={cast} />
      </div>
    </>
  );
};
export default Cast;
