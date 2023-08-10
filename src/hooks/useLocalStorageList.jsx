const { useEffect, useState } = require('react');

export const useLocalStorageList = (key, defaultValue) => {
  const [movies, setMovies] = useState(() => {
    const storedMovies = localStorage.getItem(key);
    return storedMovies ? JSON.parse(storedMovies) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(movies));
  }, [key, movies]);

  return [movies, setMovies];
};
