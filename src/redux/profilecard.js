import { createSlice } from "@reduxjs/toolkit";

export const profileCardSlice = createSlice({
  name: "quick",
  initialState: {
    pcActive: false,
    title: "Delete Quick Questions"
  },
  reducers: {
    toggleProfile: (state) => {
      state.pcActive = !state.pcActive;
    },
    setTitle: (state, action)=>{
        state.title = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleProfile, setTitle } = profileCardSlice.actions;

export default profileCardSlice.reducer;
