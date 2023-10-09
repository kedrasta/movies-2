import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModalAuth: false,
  showModalReg: false,
};

const userSlise = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    showModalAuth(state, action) {
      state.showModalAuth = action.payload;
    },
    showModalReg(state, action) {
      state.showModalReg = action.payload;
    },
  },
});

export const { showModalAuth, showModalReg } = userSlise.actions;

export default userSlise.reducer;
