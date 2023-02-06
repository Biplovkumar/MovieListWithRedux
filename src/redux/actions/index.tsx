import Type from '../constants';

///For saving the user
export const setUser = (payload: any) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: Type.LOGIN, payload: payload});
  };
};

///For removing the user after logout
export const removeUser = () => {
  return async (dispatch: (arg0: {type: string}) => void) => {
    dispatch({type: Type.LOGOUT});
  };
};

///For saving the user's language data
export const setLanguage = (payload: any) => {
  return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
    dispatch({type: Type.ChangeLang, payload: payload});
  };
};
