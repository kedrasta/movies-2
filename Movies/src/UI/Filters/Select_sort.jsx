import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { setFiltersSorting } from "../../store/redusers/filters.movies.slise";

export function SelectSort() {
  const filtersSorting = useSelector((state) => state.filters.filtersSorting);

  const dispatch = useDispatch();

  const handleChange = (sorting) => {
    dispatch(setFiltersSorting(sorting));
  };

  return (
    <div>
      <FormControl sx={{ width: "100%", paddingTop: 1 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort</InputLabel>
        <Select
          onChange={(e) => handleChange(e.target.value)}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filtersSorting}
          autoWidth
          label="Sort"
        >
          <MenuItem value={"top_rated"}>Top rating</MenuItem>
          <MenuItem value={"popular"}>Popular</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
