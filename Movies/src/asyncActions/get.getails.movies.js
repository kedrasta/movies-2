import { LANGUAGE_API, OPTIONS, URL_MOVIES } from "./data";
import { setMovieDetails } from "../store/redusers/details.movies.slise";

export const getDetailsMovie = (filmId) => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${URL_MOVIES.MOVIE}${filmId}?${LANGUAGE_API.english}`,
        OPTIONS
      );
      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        dispatch(setMovieDetails(json));
      } else {
        throw new Error("Failed to get movie details");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
