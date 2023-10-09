import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  filtersYears: [2000, 2010],
  filtersSorting: "top_rated",
  filtersGenres: [],
  error: null,
};

const filtersSlise = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFiltersYears(state, action) {
      state.filtersYears = action.payload;
    },
    setFiltersSorting(state, action) {
      state.filtersSorting = action.payload;
    },
    setFiltersGenres(state, action) {
      state.filtersGenres = action.payload;
    },
    eventError(state, action) {
      state.error = action.payload;
    },
    setFiltersDefault() {
      return initialState;
    },
  },
});

export const {
  setFiltersYears,
  setFiltersSorting,
  setFiltersGenres,
  setFiltersDefault,
  eventError,
} = filtersSlise.actions;

export default filtersSlise.reducer;
