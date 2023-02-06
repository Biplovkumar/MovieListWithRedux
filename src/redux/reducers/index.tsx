import {combineReducers} from 'redux';
import {loginReducer} from '../../screens/LoginScreen/reducer/index';
import {languageSelectionReducer} from '../../screens/LanguageScreen/reducer/index';
//All reducers path given here for combining
export default combineReducers({
  login: loginReducer,
  lang: languageSelectionReducer,
});
