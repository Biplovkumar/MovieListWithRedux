
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { LogBox, Platform, StatusBar } from 'react-native';
import MainRoute from './src/navigator/index';
import { Provider as StoreProvider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/index'
import { useTranslation } from 'react-i18next';
import { GetLangData } from './src/utils/commonFun';
StatusBar.setBarStyle('light-content');

// LogBox.ignoreLogs(['Warning: ...', 'Warning:','VirtualizedList:', "Accessing the 'state'"]); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const App = (props: any) => {
  console.log('======appjs==============================');
  console.log();
  console.log('====================================');


  const { i18n } = useTranslation();
  useEffect(() => { const lang = GetLangData(); i18n.changeLanguage(lang.data) }, [])


  return (
    <StoreProvider store={store}>
      <PersistGate persistor={persistor}>
        <MainRoute />
        <FlashMessage position="bottom" duration={2000} />
      </PersistGate>
    </StoreProvider>
  )

};


export default App;