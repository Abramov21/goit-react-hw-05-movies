import axios from 'axios';

const API_KEY = 'cb9f3ba1d1c3cba355cedf3c9174f5a3';
const BASE_URL = `https://api.themoviedb.org/3`;

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>    "FilmTrending"

export const getFilmTrendings = () => {
  return axios
    .get('/trending/movie/day', {
      params: {
        // media_type: 'movie',
        // time_window: 'day',
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
};

export const getFilmTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );

  return response.data;
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false     "searchQuery"

export const fetchFilmQuery = async (query, page = 1) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=true&page=${page}&query=${query}`
  );

  return response.data;
};

export const fetchFilmQuerys = (query, page = 1) => {
  return axios
    .get('/search/movie', {
      params: {
        query,
        language: `en - US`,
        page,
        include_adult: true,
        api_key: API_KEY,
        total_pages: 8,
      },
    })
    .then(res => res.data);
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US      "detals a movie"

// export const getFilmDetals = (id = 76600) => {
//   return axios
//     .get('/movie', {
//       params: {
//         movie_id: id,
//         api_key: API_KEY,
//         language: `en - US`,
//       },
//     })
//     .then(res => res.data);
// };

export const getFilmDetals = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

// CAST

export const getFilmCasts = movieId => {
  return axios
    .get(`/movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
        language: `en - US`,
      },
    })
    .then(res => res.data);
};

export const getFilmCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return response.data;
};

//  REVIEWS
export const getFilmReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.data;
};
