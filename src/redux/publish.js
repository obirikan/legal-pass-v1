import { createSlice } from "@reduxjs/toolkit";

export const publishSlice = createSlice({
  name: "publish",
  initialState: {
    pubActive: false,
  },
  reducers: {
    publishTog: (state) => {
      state.pubActive = !state.pubActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { publishTog } = publishSlice.actions;

export default publishSlice.reducer;
