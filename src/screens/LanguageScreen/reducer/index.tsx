import Type from '../../../redux/constants/index';

const LangStatus = {
  languageClicked : false,
  data: 'en',
};

//Save language data so that after opening the app, selected language will remain.
export const languageSelectionReducer = (state = LangStatus, action: any) => {
  switch (action.type) {
    case Type.ChangeLang:
      return {
        ...state, 
        languageClicked : action.payload ? true : false,
        data: action.payload,
      };
  }
  return state;
};
