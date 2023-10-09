import { OPTIONS, LANGUAGE_API, URL_MOVIES } from "./data";
import { setMovies } from "../store/redusers/main.movies.slise";

export const getMoviesCards = (sort, page) => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${URL_MOVIES.MOVIE}${sort}?${LANGUAGE_API.english}&page=${page}`,
        OPTIONS
      );
      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        dispatch(setMovies(json));
      } else {
        throw new Error("Failed to get movie cards");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
