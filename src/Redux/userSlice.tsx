import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  _id: string;
  fullName: string;
  email: string;
  phone?: string;
  role?: string;
}
interface AuthState {
  user: User | null;     // logged-in user
  users: User[];         // all users (admin)
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  users: [],
  loading: false,
};

// 🔥 Fetch logged-in user profile
export const fetchUserProfile = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token: string) => {
    const res = await fetch("http://localhost:5000/api/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
);

// 🔥 Fetch all users (admin)
export const fetchUsers = createAsyncThunk(
  "auth/fetchUsers",
  async (token: string) => {
    const res = await fetch("http://localhost:5000/api/auth/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.users = [];
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // PROFILE
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })

      // USERS
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })

      .addCase(fetchUserProfile.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

