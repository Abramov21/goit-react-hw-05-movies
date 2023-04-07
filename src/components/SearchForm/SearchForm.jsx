import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './SearchForm.module.css';

export const SearchForm = () => {
  const [searchParams, setSearch] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  // const { name, maxPrice, inStock } = params;

  // const [search, setSearch] = useSearchParams();

  // const queryParams = useMemo(() => {
  //   return [...search].reduce((acc, [key, value]) => {
  //     acc[key] = value;
  //     console.log(acc);
  //     console.log(key);
  //     console.log(value);
  //     return acc;
  //   }, {});
  // }, [search]);

  // console.log(search);

  const [input, setInput] = useState(params.search ?? '');

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Please, enter your request');
      return;
    }
    // setSearch({ query: input, page: 1 });
    setSearch(prev => {
      return { ...params, search: input };
    });
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormBtn}>
          <span>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          value={input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </header>
  );
};
