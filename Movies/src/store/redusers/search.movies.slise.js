import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  event: null,
};

const searchMoviesSlise = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchMovies(state, action) {
      state.event = action.payload;
    },
  },
});

export const { searchMovies } = searchMoviesSlise.actions;

export default searchMoviesSlise.reducer;
