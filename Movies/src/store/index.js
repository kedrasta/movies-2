import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./redusers/pagination.movies.slise";
import searhMovieReducer from "./redusers/search.movies.slise";
import moviesReducer from "./redusers/main.movies.slise";
import detailsMovieReducer from "./redusers/details.movies.slise";
import userReduser from "./redusers/data.user.slise";
import showModal from "./redusers/modal.form.slise";
import filtersReducer from "./redusers/filters.movies.slise";

export const store = configureStore({
  reducer: {
    user: userReduser,
    modal: showModal,
    pagination: paginationReducer,
    filters: filtersReducer,
    search: searhMovieReducer,
    movies: moviesReducer,
    detailsMovies: detailsMovieReducer,
  },
});
