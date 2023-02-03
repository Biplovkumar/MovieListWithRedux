import Type from '../constants';

export const setUser = (payload:any) => {
    return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        dispatch({ type: Type.LOGIN, payload: payload });
    };
};

export const removeUser = () => {
    return async (dispatch: (arg0: { type: string; }) => void) => {
        dispatch({ type: Type.LOGOUT });
    };
};