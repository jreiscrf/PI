import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./auth";

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
