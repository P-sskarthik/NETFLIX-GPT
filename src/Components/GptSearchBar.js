import lang from "../Utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../Utils/openai";
import { API_OPTIONS } from "../Utils/constant";
import { addGptMovieResults} from "../Utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query " +
      searchText.current.value +
      ". Only give me names of five movies, comma-separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="flex justify-center pt-32 px-4">  
      {/* Increased padding-top to prevent hiding behind the header */}
      <form 
        className="w-full max-w-lg bg-black p-5 rounded-xl flex flex-col md:flex-row gap-3 shadow-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 w-full text-lg rounded-lg outline-none bg-gray-800 text-white placeholder-gray-400"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "Search for movies..."}
        />
        <button 
          className="w-full md:w-auto px-6 py-4 bg-red-600 text-white rounded-lg font-semibold text-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
