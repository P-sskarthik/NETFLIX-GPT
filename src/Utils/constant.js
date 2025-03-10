export const logo = "https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.REACT_APP_TMDB_API_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/US-en-20241125-TRIFECTA-perspective_b55c552e-27af-438c-9052-710e645cab6c_large.jpg";

export const SUPPORTED_LANGUAGES = [{identifier: "EN", name: "English"}, {identifier: "spanish", name: "Spanish"}, {identifier: "chinese", name: "Chinese"}, {identifier: "japanese", name: "Japanese"}, {identifier: "korean", name: "Korean"}];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const GPT_BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/US-en-20241125-TRIFECTA-perspective_b55c552e-27af-438c-9052-710e645cab6c_large.jpg";
