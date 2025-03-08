import { useState } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useMovieTrailer from "../hooks/useMovieTrailer";
import muteIcon from '../assets/mute.png';   // Correct relative path
import unmuteIcon from '../assets/unmute.png'; // Import unmute icon

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
  className="absolute bottom-28 right-10 p-2 z-50 rounded-full bg-transparent border-2 border-gray-500 hover:bg-gray-800 hover:border-gray-400 focus:outline-none"
  onClick={() => setIsMuted(!isMuted)}
>
  <img
    src={isMuted ? muteIcon : unmuteIcon}  // Switch between mute/unmute icons
    alt={isMuted ? 'Muted' : 'Unmuted'}
    width={30}  // Adjust the size of the icon
    height={30} // Adjust the size of the icon
  />
</button>
    </div>
  );
};

export default MainContainer;
