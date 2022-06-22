import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    upcomingmovies: [],
    populermovies: [],
  },
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload
    },
    upComingMovies: (state, { payload }) => {
      state.upcomingmovies = payload
    },
    populerMovies: (state, { payload }) => {
      state.populermovies = payload
    },
  },
})

export const { addMovie, upComingMovies, populerMovies } = movieSlice.actions
export const getAllMovie = (state) => state.movies.movies
export default movieSlice.reducer