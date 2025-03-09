import { IMG_CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setSelectedMovieId } from "../Utils/moviesSlice";
import { useState } from "react";

const MovieCard = ({ id, posterPath }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  if (!posterPath) return null;

  return (
    <div
      className={`relative w-32 md:w-48 cursor-pointer rounded-lg transition-transform duration-300 ${
        isHovered ? "scale-110 z-50 shadow-2xl" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => dispatch(setSelectedMovieId(id))}
    >
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
