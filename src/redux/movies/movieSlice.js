import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
  },
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload
    },
  },
})

export const { addMovie } = movieSlice.actions
export const getAllMovie = (state) => state.movies.movies
export default movieSlice.reducer