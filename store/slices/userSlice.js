import { createSlice } from "@reduxjs/toolkit";
import deleteCookie from "../../lib/deleteCookie";
import Cookies from "js-cookie";
import Router from "next/navigation";
import { createUser } from "@/app/actions/cookies";
import { useRouter } from "next/navigation";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onLogin: (state, action) => {
      const router = useRouter();
      console.log(action.payload);
      const expiryTime = new Date(Date.now() + 24 * 60 * 60 * 1000);
      // Cookies.set("token", action.payload.accessToken, { expires: 100 });
      localStorage.setItem("user", JSON.stringify(action.payload?.user));

      const user = {
        ...action.payload?.user,
        token: action.payload.accessToken,
      };

      createUser(user);

      state.user = action.payload;
      state.isLoggedIn = true;
    },
    onReload: (state) => {
      const data = localStorage.getItem("user");
      if (data) {
        try {
          state.user = JSON.parse(data);
        } catch (error) {
          console.error("Error parsing user data from cookies", error);
        }
        state.isLoggedIn = true;
      }
    },
    onLogout: (state) => {
      deleteCookie("token");
      localStorage.removeItem("user");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { onLogin, onLogout, onReload } = authSlice.actions;

export default authSlice.reducer;
