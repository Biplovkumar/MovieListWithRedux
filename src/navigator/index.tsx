import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen/index';
import MovieScreen from '../screens/MovieScreen/index';
import LanguageScreen from '../screens/LanguageScreen/index';
import {GetLangClickedData, GetStoreData} from '../utils/commonFun';
import {LOGIN_SCREEN, MOVIE_SCREEN, LANGUAGE_SCREEN} from '../route';

//created stack instance
const Stack = createNativeStackNavigator();
import '../utils/translation/i18n';

//Contant Route for navigation

function MainRoute() {
  //Getting store data so that user will be navigated on repective screen like home and lon screen
  const userloggedin = GetStoreData();
  const langClicked = GetLangClickedData();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerTitleAlign: 'center'}}
        initialRouteName={userloggedin ? MOVIE_SCREEN : langClicked ? LOGIN_SCREEN : LANGUAGE_SCREEN }>
        {/* //Change Language screen */}
        <Stack.Screen
          name={LANGUAGE_SCREEN}
          component={LanguageScreen}
          options={{headerShown: false}}
        />
        {/* //Login screen */}
        <Stack.Screen
          name={LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* //Movie list screen */}
        <Stack.Screen
          name={MOVIE_SCREEN}
          component={MovieScreen}
          options={{headerTitleStyle: {fontWeight: 'bold'}}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute;
