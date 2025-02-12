import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router";

const initialState = {
  displayed: "",
  movies: [],
  status: "",
  show: "",
  error: "",
};

export const getMovies = createAsyncThunk("movies/getMovies", async (query) => {
  try {
    const API_TOKEN = import.meta.env.VITE_TMDB_API_TOKEN;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
    };

    const response = await fetch(query, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
});
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
    showChanged(state, action) {
      state.show = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.payload.error ?? "unknown error";
      });
  },
});
export const { setDisplay, setMovies, showChanged } = moviesSlice.actions;
export default moviesSlice.reducer;
