import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayed: "",
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setDisplay(state, action) {
      state.displayed = action.payload;
    },
    setMovies(state, action) {
      state.movies = action.payload;
    },
  },
});
export const { setDisplay, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
