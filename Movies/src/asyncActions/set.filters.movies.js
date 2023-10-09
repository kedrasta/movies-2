import { BASE_URL, OPTIONS } from "./data";
import { setMovies } from "../store/redusers/main.movies.slise";

export const filterMovies = (genresId, year) => {
  return async function (dispatch) {
    const yearBefore = year[0].toString();
    const yearFrom = year[1].toString();
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?release_date.gte=${yearBefore}&release_date.lte=${yearFrom}&with_genres=${genresId}`,
        OPTIONS
      );

      if (response.status === 201 || response.status === 200) {
        const json = await response.json();
        dispatch(setMovies(json));
      } else {
        throw new Error("Failed to fetch movies");
      }
    } catch (error) {
      console.error(error);
    }
  };
};
