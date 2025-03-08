import { IMG_CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setSelectedMovieId } from "../Utils/moviesSlice";

const MovieCard = ({ id, posterPath }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  return (
    <div
      className="w-32 md:w-48 cursor-pointer"
      onClick={() => {
        dispatch(setSelectedMovieId(id)); // Set the selected movie ID
      }}
    >
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} className="w-full h-auto rounded-lg" />
    </div>
  );
};

export default MovieCard;
