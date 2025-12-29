import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import artisanReducer from "../features/artisan/artisanSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    artisan: artisanReducer,
  },
});

export default store;
