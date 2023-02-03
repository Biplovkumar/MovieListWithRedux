
import React from 'react';
import 'react-native-gesture-handler';
import MainRoute from './src/navigator/index';
import { Provider as StoreProvider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store/index'
// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...', 'Warning:','VirtualizedList:', "Accessing the 'state'"]); // Ignore log notification by message
// // LogBox.ignoreAllLogs();//Ignore all log notifications

const App = (props:any) => {

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