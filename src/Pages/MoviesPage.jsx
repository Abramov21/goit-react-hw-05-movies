import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchFilmQuerys } from 'components/services/imageApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListFilms } from 'components/ListFilms/ListFilms';
// import { Button } from 'components/Button/Button';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  const ButtonLoadMore = () => {
    return (
      <button
        onClick={() => {
          console.log(123);
          setPage(prev => prev + 1);
        }}
      >
        load more
      </button>
    );
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchFilmQuerys(search, page)
      .then(data => {
        console.log(data);
        setMovies(data.results);
      })
      .catch(err => console.log(err));
  }, [search, page]);

  return (
    <>
      <SearchForm />
      {movies.length > 0 ? <ListFilms movies={movies} /> : <h1>sadasdsadsd</h1>}
      <ButtonLoadMore />
    </>
  );
};

export default Movies;
