import { createSlice } from "@reduxjs/toolkit";

export const editProfileSlice = createSlice({
  name: "editprofile",
  initialState: {
    epActive: false,
  },
  reducers: {
    toggleEp: (state) => {
      state.epActive = !state.epActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleEp } = editProfileSlice.actions;

export default editProfileSlice.reducer;
