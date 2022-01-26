import { createSlice } from "@reduxjs/toolkit";

export const amSlice = createSlice({
  name: "assistmodal",
  initialState: {
    amActive: false,
  },
  reducers: {
    toggleAm: (state) => {
      state.amActive = !state.amActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleAm } = amSlice.actions;

export default amSlice.reducer;
