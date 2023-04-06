import { SearchForm } from 'components/SearchForm/SearchForm';
import { fetchFilmQuerys } from 'components/services/imageApi';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchMoviesList } from 'components/SearchMoviesList/SearchMoviesList';
// import { Button } from 'components/Button/Button';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search] = useSearchParams();

  const query = search.get('query'); // location.search
  const page = search.get('page');

  // const handleChangePage = () => {
  //   setSearch({ query, page: Number(page) + 1 });
  // };

  useEffect(() => {
    fetchFilmQuerys(query, page)
      .then(data => {
        // console.log(data);
        setMovies(data.results);
      })
      .catch(err => console.log(err));
  }, [query, page]);

  return (
    <>
      <SearchForm />
      {movies.length > 0 && <SearchMoviesList movies={movies} />}
    </>
  );
};

export default Movies;
