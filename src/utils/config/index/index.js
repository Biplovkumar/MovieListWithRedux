//Main Api link (Base URL)
const LIVE = 'https://api.themoviedb.org/3/movie/popular';
//Image link
const posterPath = 'https://image.tmdb.org/t/p/original';

const HOST = LIVE + 'endpoint';

//Some important keys like language Api key
const ApiKey = '2f3a10f1811ff5a06df9b2d17f1ff3d6';
const langKey = '?api_key=';
const languageKey = '&language=';
const pageKey = '&page=';
const ENG = 'en-US';
const ARBIC = 'ar-SA';
const LangApi = LIVE + langKey + ApiKey + languageKey;

//Decleared important files which resides in assests folder.
const backgroundImage = require('../../../assets/back.png');
const logoImage = require('../../../assets/logo.png');
const tmdbLogoImage = require('../../../assets/tmdbLogo.png');

export default {
  LIVE: LIVE,
  HOST: HOST,
  posterPath: posterPath,
  ENG: ENG,
  ARBIC: ARBIC,
  LangApi: LangApi,
  pageKey: pageKey,
  logoImage: logoImage,
  tmdbLogoImage: tmdbLogoImage,
  backgroundImage: backgroundImage,
};
// ?api_key=2f3a10f1811ff5a06df9b2d17f1ff3d6&language=ar-SA&page=1
