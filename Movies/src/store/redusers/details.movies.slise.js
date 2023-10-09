import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
};

const detailsMovieSlise = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setMovieDetails(state, action) {
      state.movie = action.payload;
    },
  },
});

export const { setMovieDetails } = detailsMovieSlise.actions;

export default detailsMovieSlise.reducer;
