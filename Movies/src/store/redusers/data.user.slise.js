import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authorization: false,
  id: null,
};

const userSlise = createSlice({
  name: "user",
  initialState,
  reducers: {
    authorization(state, action) {
      state.authorization = action.payload;
    },
    userId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { authorization, userId } = userSlise.actions;

export default userSlise.reducer;
