import { createSlice } from "@reduxjs/toolkit";

export const quickSlice = createSlice({
  name: "quick",
  initialState: {
    active: false,
  },
  reducers: {
    toggle: (state) => {
      state.active = !state.active;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = quickSlice.actions;

export default quickSlice.reducer;
