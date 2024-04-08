import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/userSlice";
import orderReducer from "./slices/orderSlice";

export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      orders: orderReducer,
    },
  });
};
