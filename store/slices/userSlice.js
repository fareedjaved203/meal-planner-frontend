import { createSlice } from "@reduxjs/toolkit";
import deleteCookie from "../../lib/deleteCookie";
import { getUser } from "@/app/actions/cookies";
import getCookie from "@/lib/getCookie";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    onReload: (state) => {
      const user = getCookie("user");
      const decodedUser = decodeURIComponent(user);
      if (decodedUser) {
        try {
          state.user = JSON.parse(decodedUser);
          state.isLoggedIn = true;
        } catch (error) {
          console.error("Error parsing user data from cookies", error);
        }
      }
    },

    onLogout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { onLogin, onLogout, onReload } = authSlice.actions;

export default authSlice.reducer;
