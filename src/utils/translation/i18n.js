

/**
 *
 * @param {*} eng.json //Static strings JSON in English.
 * @param {*} arbic.json //Static strings JSON in Arbic.
 * @param {*} i18n.changeLanguage(lang.data) } Change the language when opening the app..
 * @param {*} resources It is a data/strings for i18n libarary
 * @param {*} MainRoute is the main component navigator.
 * @param {*} loader Whether loader is to be shown or not (boolean).
 */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './eng.json';
import ar from './arbic.json';

const resources = {en: en, ar: ar};

//initialization of i18n.
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