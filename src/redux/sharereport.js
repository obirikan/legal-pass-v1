import { createSlice } from "@reduxjs/toolkit";

export const shareReportSlice = createSlice({
  name: "sharereport",
  initialState: {
    srActive: false,
    curTab: "",
  },
  reducers: {
    toggleSR: (state, action) => {
      state.srActive = action.payload;
    },
    toggleReport: (state, action) => {
      state.curTab = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleSR, toggleReport } = shareReportSlice.actions;

export default shareReportSlice.reducer;
