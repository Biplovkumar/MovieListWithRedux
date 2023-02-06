import Type from '../../../redux/constants/index';

const LangStatus = {
  data: 'en',
};

//Save language data so that after opening the app, selected language will remain.
export const languageSelectionReducer = (state = LangStatus, action: any) => {
  switch (action.type) {
    case Type.ChangeLang:
      return {
        ...state,
        data: action.payload,
      };
  }
  return state;
};
