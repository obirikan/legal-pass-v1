import { createSlice } from "@reduxjs/toolkit";

export const lpSlice = createSlice({
  name: "lpmodal",
  initialState: {
    lpActive: false,
  },
  reducers: {
    toggleLp: (state) => {
      state.lpActive = !state.lpActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLp } = lpSlice.actions;

export default lpSlice.reducer;
