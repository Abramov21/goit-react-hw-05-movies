import { Link, useLocation, useNavigate } from 'react-router-dom';
import s from './MovieDetailsInfo.module.css';
import { useRef } from 'react';

export const MovieDetailsInfo = movie => {
  const userScore = Math.floor(movie?.movie?.vote_average * 10);
  const imgPath = `https://image.tmdb.org/t/p/w500${movie.movie.poster_path}`;

  const location = useLocation();
  const navigate = useNavigate();
  const prevPage = useRef(location.state?.from);
  // console.log(prevPage.current);
  return (
    <div className={s.container}>
      <button className={s.btn} onClick={() => navigate(prevPage.current)}>
        Back{' '}
      </button>
      <div className={s.card}>
        <img width="300" src={imgPath} alt={movie?.movie?.title} />
        <div className={s.info}>
          <h2>{movie.movie.title}</h2>
          <h2>Data release:{movie?.movie?.release_date}</h2>
          <p>{`User Score: ${userScore}%`}</p>
          <h3>Overview</h3>
          <p>{movie?.movie?.overview}</p>
          <h3>Genres</h3>
          <div className={s.genres}>
            <p>
              {movie?.movie?.genres?.length > 0
                ? movie?.movie?.genres?.map(item => item.name).join(', ')
                : 'no info'}
            </p>
            {/* <ul>
              <li> */}
            <Link to="cast" state={location} className={s.cast}>
              Cast
            </Link>
            {/* </li>
              {/* <li>
                <Link to="reviews" state={location}>
                  Reviews
                </Link>
              </li> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};
