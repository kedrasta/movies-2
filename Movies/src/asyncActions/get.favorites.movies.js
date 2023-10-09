import { OPTIONS, URL_MOVIES } from "./data";
import { setFavoritesMoviesId } from "../store/redusers/main.movies.slise";

export const getFavMovies = () => {
  return async function (dispatch) {
    try {
      const response = await fetch(URL_MOVIES.FAVORITE, OPTIONS);
      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        const favoritesMoviesIds = json.results.map((el) => el.id);
        dispatch(setFavoritesMoviesId(favoritesMoviesIds));
      } else {
        throw new Error("Failed to get favorite movies");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
