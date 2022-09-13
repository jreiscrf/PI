import { createSlice } from "@reduxjs/toolkit";

export const Auth = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    email: "",
    password: "",
  },
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setAuthenticated, setUser, setEmail, setPassword } =
  Auth.actions;
export default Auth.reducer;
