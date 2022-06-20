import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import moviesReducer from "./movies/movieSlice"


export const store = configureStore({
  reducer: {
    counter,
    moviesReducer
  },
});
