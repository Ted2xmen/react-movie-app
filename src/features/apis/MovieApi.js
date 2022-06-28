import axios from "axios"

export default axios.create({
  baseURL:
    'https://api.themoviedb.org/3/',
})


export const apiKey = process.env.REACT_APP_MOVIE
