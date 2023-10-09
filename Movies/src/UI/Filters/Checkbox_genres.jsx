import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenresMovies } from "../../asyncActions/get.genres.movies";
import { filterMovies } from "../../asyncActions/set.filters.movies";
import { setFiltersGenres } from "../../store/redusers/filters.movies.slise";

export function CheckBoxGenres() {
  const genresMovies = useSelector((state) => state.movies.genres);
  const filtersGenres = useSelector((state) => state.filters.filtersGenres);
  const filtersYears = useSelector((state) => state.filters.filtersYears);
  const genresIdString = filtersGenres.map((genre) => genre.id).join(",");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenresMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterMovies(genresIdString, filtersYears));
  }, [filtersGenres, dispatch, filtersYears, genresIdString]);

  const handleChange = (event, selectedGenres) => {
    dispatch(setFiltersGenres(selectedGenres));
  };

  return genresMovies ? (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={genresMovies}
      onChange={handleChange}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Genres" placeholder="Select genres" />
      )}
      sx={{ width: "100%", paddingTop: 3 }}
    />
  ) : (
    <TextField>Loading...</TextField>
  );
}
