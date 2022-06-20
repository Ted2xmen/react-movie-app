import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        value: []
    }
})

export default movieSlice.reducer