import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useState } from "react"; // ✅ Added useState to track selected movie

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const [selectedMovieId, setSelectedMovieId] = useState(null); // ✅ Track selected movie

  return (
    <div className="bg-black">
      <div className="relative z-20 -mt-0 md:-mt-52 pl-2 md:pl-4">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
        />
        <MovieList
          title={"Top Rated"}
          movies={movies.topRatedMovies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
          selectedMovieId={selectedMovieId}
          setSelectedMovieId={setSelectedMovieId}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;