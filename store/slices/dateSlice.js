import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: null,
};

const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    onDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { onDate } = dateSlice.actions;

export default dateSlice.reducer;
