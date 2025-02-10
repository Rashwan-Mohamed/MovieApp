import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = [];

// const fetchMovies = createAsyncThunk("fetch/movies", async () => {

// });
// why do I need thunks??

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

/*
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDgzYTdhN2M5YjhlZGNmN2RlZDYwNmU3ZjA5Mjg1NiIsIm5iZiI6MTY3NjczMTE0MS40MzkwMDAxLCJzdWIiOiI2M2YwZTMwNWEyNGM1MDAwODQ4YzkyZWUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0ps3nbsJzYSZFnBf4KKb8DmG6An5hzSe5SKyT5RsqdQ'
  }
};

fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&region=US&sort_by=popularity.asc&vote_average.gte=3.5&with_genres=Action', options)
  .then(res => res.json())    
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/