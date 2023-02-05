
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './eng.json';
import ar from './arbic.json';

const resources = {en: en, ar: ar};

i18n.use(initReactI18next).init({
  lng: 'en',
    //language to use if translations in user language are not available
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;