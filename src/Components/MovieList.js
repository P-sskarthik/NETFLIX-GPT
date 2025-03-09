import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies, selectedMovieId, setSelectedMovieId }) => {
  const loading = useSelector((store) => store?.movies?.loading);

  return loading ? null : (
    <div className="p-4 md:p-6 z-40">
      <h1 className="text-2xl md:text-3xl font-bold py-6 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none scrollbar-hide">
        <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
          {movies?.map((movie) => (
            <MovieCard
              key={movie?.id}
              id={movie?.id}
              posterPath={movie?.poster_path}
              isSelected={movie?.id === selectedMovieId} // ✅ Highlight selected card
              onSelect={() => setSelectedMovieId(movie?.id)} // ✅ Handle selection
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;