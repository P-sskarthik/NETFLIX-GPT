import { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MainContainer = () => {
  const [isMuted, setIsMuted] = useState(true); // 🔊 State to track mute/unmute
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const selectedMovieId = useSelector((store) => store.movies?.selectedMovieId);

  const allMovies = [...(nowPlayingMovies || []), ...(topRatedMovies || []), ...(upcomingMovies || []), ...(popularMovies || [])];

  const mainMovie = allMovies.find(movie => movie.id === selectedMovieId) || nowPlayingMovies?.[0];

  const movieId = mainMovie?.id;
  const title = mainMovie?.original_title || "";
  const overview = mainMovie?.overview || "";

  useMovieTrailer(movieId);

  if (!mainMovie) return null;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={movieId} isMuted={isMuted} />

      {/* 🎵 Toggle Sound Button */}
      <button
  className="absolute bottom-28 right-10 bg-gray-600 text-white px-4 py-2 rounded-lg z-50"
  onClick={() => setIsMuted(!isMuted)}
>
  {isMuted ? "🔇" : "🔊"}
</button>
    </div>
  );
};

export default MainContainer;
