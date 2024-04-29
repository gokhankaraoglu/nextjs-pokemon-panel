import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import comparingReducer from "./comparing/comparingReducer";

export const store = configureStore({
  reducer: {
    comparing: comparingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
