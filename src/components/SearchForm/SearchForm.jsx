import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import s from './SearchForm.module.css';

export const SearchForm = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useSearchParams(); // location.search

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Please, enter your request');
      return;
    }
    setSearch({ query: input, page: 1 });
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
