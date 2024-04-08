import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: null,
};

const authSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    onSave: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { onSave } = authSlice.actions;

export default authSlice.reducer;
