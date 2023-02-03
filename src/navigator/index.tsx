import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from '../screens/Screen1/index'
import Screen2 from '../screens/Screen2/index'
import { GetStoreData } from '../utils/commonFun';
import { Icon } from 'react-native-elements';
const Stack = createNativeStackNavigator();

function MainRoute() {
  const userloggedin = GetStoreData();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={!userloggedin ? "Screen1" : "Screen2"}>
      {/* screenOptions={{headerShown: false}}  */}
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false }}/>
        <Stack.Screen name="Screen2" component={Screen2} 
       
       options={{ title: "Movie List", headerTitleStyle:{fontWeight:'bold'}, headerBackVisible:false,
       headerRight: (props:any) => (<Icon name='logout-variant' type='material-community' color="rgb(158,198,116)" 
       onPress={() => {  props.navigation.navigate('Screen1')}}/>) 
       }}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MainRoute;