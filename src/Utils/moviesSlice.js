import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    popularMovies: [],
    trailerVideo: null,
    selectedMovieId: null, // New state to store selected movie ID
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload; // Store selected movie ID
    },
  },
});

export const {
  addNowPlayingMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  addPopularMovies,
  addTrailerVideo,
  setSelectedMovieId,
} = moviesSlice.actions;

export default moviesSlice.reducer;
