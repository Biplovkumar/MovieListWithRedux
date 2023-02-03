import { combineReducers } from 'redux';
import { loginReducer } from '../../screens/Screen1/reducer/index';

export default combineReducers({
    login: loginReducer,
})