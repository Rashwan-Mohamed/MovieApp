import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/mainSlice/moviesSlice";
export const store = configureStore({ reducer: { movies: moviesReducer } });
