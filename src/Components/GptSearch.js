import { GPT_BG_URL} from "../Utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
    <div className='fixed -z-10'>
 <img 
 src={GPT_BG_URL} alt="logo"/>
    </div>
     <GptSearchBar />
     <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;