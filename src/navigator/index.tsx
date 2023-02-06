import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/Screen1/index'
import Screen2 from '../screens/Screen2/index'
import LanguageSelection from '../screens/LanguageSelection/index'
import { GetStoreData } from '../utils/commonFun';

//created stack instance
const Stack = createNativeStackNavigator();
import '../utils/translation/i18n';

//Contant Route for navigation
import { SCREEN1, SCREEN2, LANGUAGE_SCREEN } from '../route';

function MainRoute() {

  //Getting store data so that user will be navigated on repective screen like home and lon screen
  const userloggedin = GetStoreData();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }} initialRouteName={!userloggedin ? "LanguageSelection" : "Screen2"}>
        {/* //Change Language screen */}
        <Stack.Screen name={LANGUAGE_SCREEN} component={LanguageSelection} options={{ headerShown: false }} />
        {/* //Login screen */}
        <Stack.Screen name={SCREEN1} component={Screen1} options={{ headerShown: false }} />
        {/* //Movie list screen */}
        <Stack.Screen name={SCREEN2} component={Screen2} options={{ headerTitleStyle: { fontWeight: 'bold'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute;