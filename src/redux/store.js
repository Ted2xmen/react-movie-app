import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice'
import moviesReducer from "./movies/movieSlice"


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    moviesReducer
  },
});
