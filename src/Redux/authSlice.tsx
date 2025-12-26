import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
   loginSuccess: (
  state,
  action: PayloadAction<{ user: User; token: string }>
) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
},

    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
});
console.log(authSlice,"lllllllllllllll");

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
