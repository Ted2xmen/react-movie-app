import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice";
import movie from "./movies/movieSlice"

export const store = configureStore({
  reducer: {
    counter,
    movie
  },
});
