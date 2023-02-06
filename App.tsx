/**
 *
 * @param {*} GetLangData got saved language data from redux.
 * @param {*} i18n.changeLanguage(lang.data) } Change the language when opening the app..
 * @param {*} data Done redux setup with store and persist Gate.
 * @param {*} MainRoute is the main component navigator.
 * @param {*} loader Whether loader is to be shown or not (boolean).
 */

import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import MainRoute from './src/navigator/index';
import {Provider as StoreProvider} from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/redux/store/index';
import {useTranslation} from 'react-i18next';
import {GetLangData} from './src/utils/commonFun';
StatusBar.setBarStyle('light-content');

const App = (props: any) => {
  const {i18n} = useTranslation();

  useEffect(() => {
    const lang = GetLangData();
    i18n.changeLanguage(lang.data);
  }, []);

  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <MainRoute />
        <FlashMessage position="bottom" duration={2000} />
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
