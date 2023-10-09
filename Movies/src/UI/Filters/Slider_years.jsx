import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setFiltersYears } from "../../store/redusers/filters.movies.slise";

export function SliderYears() {
  const filtersYears = useSelector((state) => state.filters.filtersYears);

  const dispatch = useDispatch();

  const handleChange = (event, years) => {
    dispatch(setFiltersYears(years));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Relase year:</Typography>
      <Slider
        value={filtersYears}
        onChange={handleChange}
        getAriaValueText={(value) => `${value}°C`}
        valueLabelDisplay="on"
        min={1960}
        max={2024}
      />
    </Box>
  );
}
