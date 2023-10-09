import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../../store/redusers/search.movies.slise";

export function MovieSearh() {
  const dispatch = useDispatch();

  function handleChange(text) {
    dispatch(searchMovies(text));
  }

  return (
    <TextField
      onChange={(e) => handleChange(e.target.value)}
      id="outlined-basic"
      label="Search movie titile"
      variant="outlined"
    />
  );
}
