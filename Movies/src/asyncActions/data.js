const store = require("store");

export const TOKEN = store.get("token");

const accountId = store.get("accountId");

export const LANGUAGE_API = {
  english: "language=en",
};

export const BASE_URL = "https://api.themoviedb.org/3";

export const URL_MOVIES = {
  MOVIE: `${BASE_URL}/movie/`,
  GENRE: `${BASE_URL}/genre/movie/list?`,
  IMAGE: "https://image.tmdb.org/t/p/w500",
  FAVORITE: `${BASE_URL}/account/${accountId}/favorite/movies?${LANGUAGE_API.english}&page=1&sort_by=created_at.asc`,
  SEARCH: `${BASE_URL}/search/movie`,
  CHANGE_FAVORITE: `${BASE_URL}/account/${accountId}/favorite`,
  ACCOUNT_ID: `${BASE_URL}/account/account_id`,
};

export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

/* "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDJjNDZkNjEyM2YyMjQ3M2ZiNGJlOGRlM2YzMzBjYiIsInN1YiI6IjY0OTE5YzUyNTU5ZDIyMDBmZjEyOTVhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jVF-zyi6kMY_PxigqwK4d7RMqrmC8v4l9pAYnrnpUs0"; */
