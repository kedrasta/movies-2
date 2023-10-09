import { URL_MOVIES, TOKEN } from "./data";
import { eventFavoritesMovies } from "../store/redusers/main.movies.slise";
import { eventError } from "../store/redusers/filters.movies.slise";

export const addFavMovies = (id, action) => {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      media_type: "movie",
      media_id: id,
      favorite: action,
    }),
  };
  return async function (dispatch) {
    try {
      const response = await fetch(URL_MOVIES.CHANGE_FAVORITE, options);

      if (response.status === 200 || response.status === 201) {
        const json = await response.json();
        dispatch(eventFavoritesMovies(json));
      }
    } catch (error) {
      dispatch(eventError(error));
    }
  };
};
