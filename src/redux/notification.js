import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notiActive: false,
  },
  reducers: {
    togNotification: (state) => {
      state.notiActive = !state.notiActive;
    },
  },
});

// Action creators are generated for each case reducer function
export const { togNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
