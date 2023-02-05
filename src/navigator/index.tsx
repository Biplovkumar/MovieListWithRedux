import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/Screen1/index'
import Screen2 from '../screens/Screen2/index'
import LanguageSelection from '../screens/LanguageSelection/index'
import { GetStoreData, GetLangData } from '../utils/commonFun';
import { Icon } from 'react-native-elements';
const Stack = createNativeStackNavigator();
import '../utils/translation/i18n';
import { SCREEN1, SCREEN2, LANGUAGE_SCREEN } from '../route';

function MainRoute() {

  const userloggedin = GetStoreData();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} initialRouteName={!userloggedin ? "LanguageSelection" : "Screen2"}>
        <Stack.Screen name={SCREEN1} component={Screen1} options={{ headerShown: false }} />
        <Stack.Screen name={LANGUAGE_SCREEN} component={LanguageSelection} options={{ headerShown: false }} />
        <Stack.Screen name={SCREEN2} component={Screen2} options={{ headerTitleStyle: { fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute;