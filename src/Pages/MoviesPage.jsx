import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchFilmQuerys } from 'components/services/imageApi';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
// import { Button } from 'components/Button/Button';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  // const [searchParams] = useSearchParams();

  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  // const params = useMemo(
  //   () => Object.fromEntries([...searchParams]),
  //   [searchParams]
  // );

  // const handleChangePage = () => {
  //   setSearch({ query, page: Number(page) + 1 });
  // };

  useEffect(() => {
    if (!search) {
      return;
    }
    fetchFilmQuerys(search)
      .then(data => {
        // console.log(data);
        setMovies(data.results);
      })
      .catch(err => console.log(err));
  }, [search]);

  return (
    <>
      <SearchForm />
      {movies.length > 0 && <SearchMoviesList movies={movies} />}
    </>
  );
};

export default Movies;
