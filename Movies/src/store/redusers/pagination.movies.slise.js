import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const paginationMoviesSlise = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCurrentPage } = paginationMoviesSlise.actions;

export default paginationMoviesSlise.reducer;
