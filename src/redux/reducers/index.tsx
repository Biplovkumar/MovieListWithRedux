import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/Screen1/reducer/index';
import { languageSelectionReducer } from '../../screens/LanguageSelection/reducer/index';

export default combineReducers({
    login: loginReducer,
    lang: languageSelectionReducer,
})