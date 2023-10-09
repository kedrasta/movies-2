import { LANGUAGE_API, OPTIONS, URL_MOVIES } from "./data";
import { setMovies } from "../store/redusers/main.movies.slise";

export const searchMovies = (text) => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${URL_MOVIES.SEARCH}?query=${text}%3D&include_adult=false&${LANGUAGE_API.english}&page=1`,
        OPTIONS
      );
      if (response.status === 200 || response.status === 200) {
        const json = await response.json();
        dispatch(setMovies(json));
      } else {
        throw new Error("Failed to search movies");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
