import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { PaginationCard } from "./Pagination";
import { CheckBoxGenres } from "./Checkbox_genres";
import { SelectSort } from "./Select_sort";
import { SliderYears } from "./Slider_years";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MovieSearh } from "./Search_movies";
import { useDispatch } from "react-redux";
import { setFiltersDefault } from "../../store/redusers/filters.movies.slise";

export function Filters() {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setFiltersDefault());
  };

  return (
    <>
      <Box
        sx={{
          width: "60em",
          height: "30em",
          padding: 4,
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Typography variant="h5">Filters</Typography>
          <IconButton onClick={handleChange} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
        <MovieSearh />
        <SelectSort />
        <SliderYears />
        <CheckBoxGenres />
        <PaginationCard />
      </Box>
    </>
  );
}
