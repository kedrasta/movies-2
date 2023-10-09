import { OPTIONS, LANGUAGE_API, URL_MOVIES } from "./data";
import { setGenres } from "../store/redusers/main.movies.slise";

export const getGenresMovies = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${URL_MOVIES.GENRE}${LANGUAGE_API.english}`,
        OPTIONS
      );
      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        dispatch(setGenres(json.genres));
      } else {
        throw new Error("Failed to get movie genres");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
