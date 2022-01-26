import { createSlice } from "@reduxjs/toolkit";

export const toProfileSlice = createSlice({
  name: "toprofile",
  initialState: {
    onProfile: false,
  },
  reducers: {
    toggleToProfile: (state, action) => {
      state.onProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleToProfile } = toProfileSlice.actions;

export default toProfileSlice.reducer;
