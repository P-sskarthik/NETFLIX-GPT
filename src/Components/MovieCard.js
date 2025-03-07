import { IMG_CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setSelectedMovieId } from "../Utils/moviesSlice";

const MovieCard = ({ id, posterPath }) => {
  const dispatch = useDispatch();

  if (!posterPath) return null;

  return (
    <div
      className="w-48 cursor-pointer"
      onClick={() => {
        dispatch(setSelectedMovieId(id)); // Set the selected movie ID
      }}
    >
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
