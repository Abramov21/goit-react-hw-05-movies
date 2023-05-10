import { Link, useLocation } from 'react-router-dom';
import s from './FavouriteMovies.module.css';
// import { useLocalStorageList } from 'hooks/useLocalStorageList';

const FavouriteMovies = () => {
  const location = useLocation();
  const movies = JSON.parse(localStorage.getItem(`likeMovie`));

  return (
    <>
      <h1 className={s.title}>Favourite movie</h1>
      <ul className={s.list}>
        {movies?.map(({ id, title, poster_path, vote_average }) => {
          const imgPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
          const notFindImage =
            'https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg';
          return (
            <li key={id} className={s.list__item}>
              {/* <button
              className={s.buttonLike}
              onClick={() =>
                handleLikeButton(id, title, poster_path, vote_average)
              }
            >
              Like
            </button> */}
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

export default FavouriteMovies;
