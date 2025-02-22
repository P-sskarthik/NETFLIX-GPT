import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
 <img 
 src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/US-en-20241125-TRIFECTA-perspective_b55c552e-27af-438c-9052-710e645cab6c_large.jpg"
    alt="logo"
    />
    </div>
     <GptSearchBar />
     <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;