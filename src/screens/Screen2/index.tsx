import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { store } from '../../redux/store';
import { removeUser } from '../../redux/actions/index';
import { RemoveData } from '../../utils/commonFun';

function Screen2(props:any) {

  React.useEffect(() => {
    // Use `setOptions` to delete the user data and navigate again to login page.
    props.navigation.setOptions({ headerRight: () => (
        <Icon name='logout-variant' type='material-community' color="rgb(158,198,116)" 
       onPress={() => {RemoveData(); props.navigation.navigate('Screen1')}}/>
      )});
  }, [props]);



  return (
    <View style={styles.container}>
       <Text>Second Screen</Text>
      {/* <Button title="Hey!" /> */}
      <Icon
  raised
  name='camera'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }})

  export default Screen2;
