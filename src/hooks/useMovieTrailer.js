import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { addTrailerVideo } from "../Utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!movieId) return; // Ensure movieId is valid

        const getMovieVideos = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
                    API_OPTIONS
                );
                const json = await response.json();

                // Filter to find a trailer
                const trailers = json.results.filter((video) => video.type === "Trailer");
                const trailer = trailers.length ? trailers[0] : json.results[0] || null;

                dispatch(addTrailerVideo(trailer)); // Update Redux store
            } catch (error) {
                console.error("Error fetching movie trailer:", error);
                dispatch(addTrailerVideo(null)); // Ensure store is updated even if fetch fails
            }
        };

        getMovieVideos();
    }, [movieId, dispatch]); // Re-run when movieId changes
};

export default useMovieTrailer;
