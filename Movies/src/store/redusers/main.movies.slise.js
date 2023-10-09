import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genres: [],
  favoritesMoviesId: [],
  eventFavoritesMovies: [],
};

const moviesSlise = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setGenres(state, action) {
      state.genres = action.payload;
    },
    setFavoritesMoviesId(state, action) {
      state.favoritesMoviesId = action.payload;
    },
    eventFavoritesMovies(state, action) {
      state.eventFavoritesMovies = action.payload;
    },
  },
});

export const {
  setMovies,
  setGenres,
  setFavoritesMoviesId,
  eventFavoritesMovies,
} = moviesSlise.actions;

export default moviesSlise.reducer;
