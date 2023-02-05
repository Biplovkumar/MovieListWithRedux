const LIVE = 'https://api.themoviedb.org/3/movie/popular';


const HOST = LIVE + 'endpoint';


const ApiKey = "2f3a10f1811ff5a06df9b2d17f1ff3d6"
const langKey = "?api_key="
const languageKey = "&language="
const pageKey = "&page="
const LangApi = LIVE + langKey + ApiKey + languageKey


const backgroundImage=require("../../../assets/back.png")
const logoImage=require("../../../assets/logo.png")
const tmdbLogoImage=require("../../../assets/tmdbLogo.png")

export default {
  LIVE: LIVE,
  HOST: HOST,
  LangApi:LangApi,
  logoImage:logoImage,
  tmdbLogoImage:tmdbLogoImage,
  backgroundImage:backgroundImage,
}
// ?api_key=2f3a10f1811ff5a06df9b2d17f1ff3d6&language=ar-SA&page=1