import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice";

export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};
