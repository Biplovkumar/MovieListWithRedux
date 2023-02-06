import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/Screen1/reducer/index';
import { languageSelectionReducer } from '../../screens/LanguageSelection/reducer/index';
//All reducers path given here for combining
export default combineReducers({
    login: loginReducer,
    lang: languageSelectionReducer,
})