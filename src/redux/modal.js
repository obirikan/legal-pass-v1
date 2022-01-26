import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    activeModal: "",
  },
  reducers: {
    toggleModal: (state, action) => {
      state.activeModal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {  toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
