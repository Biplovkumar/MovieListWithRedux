import Type from '../../../redux/constants/index';

const LoginStatus = {
  data: {},
};

// For saving user's data.
export const loginReducer = (state = LoginStatus, action: any) => {
  switch (action.type) {
    case Type.LOGIN:
      return {
        ...state,
        data: action.payload,
      };
    case Type.LOGOUT:
      return LoginStatus.data;
  }
  return state;
};
