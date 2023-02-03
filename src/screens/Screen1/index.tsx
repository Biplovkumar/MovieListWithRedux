import React, { useEffect, useState } from 'react';
import {
StatusBar,
StyleSheet,
Text,
Dimensions,
View,
TouchableOpacity,
ImageBackground,
ActivityIndicator,
KeyboardAvoidingView,
TouchableWithoutFeedback,
Keyboard,
TextInput
} from 'react-native';
// import {
// Colors,
// DebugInstructions,
// Header,
// LearnMoreLinks,
// ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
import {Button, Image, Input} from 'react-native-elements'
import { DispatchData, validateEmail, validatePass } from '../../utils/commonFun';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { setUser } from '../../redux/actions';

const {width, height} = Dimensions.get('window');

const back = require('../../assets/back.png')
const tmdbLogo = require('../../assets/tmdbLogo.png')

const placeColor = "#003f5c"



const App =  (props:any) => {
  const emailRef = React.useRef<TextInput | null>(null);
  const passRef = React.useRef<TextInput | null>(null);

  const [state,setState] = useState({
    email: '', emailError: '',
    password: '', passError: '',
    loading:false,
    btnDisabled:true })

  // const loginData  = useSelector((s:any) => console.log('------',s.login.data));

  

  const handleAddTodo = () => {
    let data = {name:state.email, age:state.password}
    DispatchData(setUser(data))
    props.navigation.navigate("Screen2")
  }


const onBlurLogin = () => {
// Do something about login operation
Keyboard.dismiss()

let emailValid = validateEmail(state.email)

let passValid = validatePass(state.password)

if (state.email && !emailValid) {
  setState({...state,emailError:"Enter valid email", passError:'',  btnDisabled: true})
}
if (state.password && !passValid) {
  setState({...state,passError:"Enter valid password", emailError:'',  btnDisabled: true})
}

if (state.email && state.password && emailValid && passValid) {

  setState({...state, passError:'', emailError:'', btnDisabled: false})

  setTimeout(() => { setState({...state, loading: true}) }, 2000);
  setTimeout(() => { setState({...state, loading: false}) }, 3000);
  setTimeout(() => { setState({...state, loading: false});handleAddTodo();  }, 3000);
  
}
};



const onPressLogin = () => {
// Do something about login operation
};
const onPressForgotPassword = () => {
// Do something about forgot password operation
};
const onPressSignUp = () => {
// Do something about signup operation
};


return (
<ImageBackground source={back} style={styles.imageBg}> 

<SafeAreaView onStartShouldSetResponder={()=>{onBlurLogin(); return true}} style={styles.container}>
<ScrollView 
keyboardShouldPersistTaps='always' 
showsVerticalScrollIndicator={false} 
onResponderRelease={Keyboard.dismiss}
automaticallyAdjustKeyboardInsets={true}>

<View style={{flex:0.3, alignItems:'center'}}>
<Text style={styles.title}> Screen1</Text>
<Image
  source={tmdbLogo}
  style={{ width: width/2,resizeMode:'contain', height: height/4 }}
  PlaceholderContent={<ActivityIndicator />}
/>
</View>

<View style={{flex:0.7}}>
<Input
    labelStyle={{color: state.email ? "rgba(4,4,4,0.4)" : 'transparent'}}
    label={'Email'}
    value={state.email}
    maxLength={30}
    errorMessage={state.emailError}
    // errorStyle={{backgroundColor:'grey'}}
    inputContainerStyle={styles.inputView}
    keyboardType="email-address"
    inputStyle={{marginLeft:5}}
    placeholder="Email"
    leftIcon={{ type: 'material-community', name: 'email-edit-outline' }}
    placeholderTextColor={placeColor}
    returnKeyType='next'
    onSubmitEditing={()=>{ onBlurLogin(); passRef.current?.focus();}}
    onChangeText={text => setState({...state,email:text, emailError:''})}
    />


<Input
   placeholder="Password"
   ref={passRef}
   placeholderTextColor={placeColor}
  //  secureTextEntry
   value={state.password}
   maxLength={15}
   autoCapitalize='none'
   labelStyle={{color: state.password ? "rgba(4,4,4,0.4)" : 'transparent'}}
   label={'Password'}
   leftIcon={{ type: 'material', name: 'lock-outline' }}
   inputContainerStyle={styles.inputView}
   inputStyle={{marginLeft:5}}
   errorMessage={state.passError}
   returnKeyType='done'
  //  errorStyle={{backgroundColor:'grey'}}
   onChangeText={text => setState({...state,password:text, passError: ''})}/>
 </View>


 <Button
  title="LOGIN"
  loading={state.loading}
  onPress={onPressLogin}
  disabled={state.btnDisabled}
  disabledStyle={styles.disabledBtn}
  disabledTitleStyle={styles.disabledText}
  buttonStyle={styles.loginBtn}
  titleStyle={styles.loginText}
/>

<View style={{ height: height/50 }} />
</ScrollView>
</SafeAreaView>
</ImageBackground>

);
}






const styles = StyleSheet.create({
container: {
flex: 1, alignItems: 'center'},
imageBg: {flex: 1 },
title:{
fontWeight: "bold",
fontSize:50,
color:"#5474b4"
},
inputView:{
width:"100%",
height:50,
backgroundColor:"#d3d3d3",
borderRadius:25,
justifyContent:"center",
marginTop:10,
padding:20,
borderBottomWidth:0
},
loginText:{
  fontWeight: "bold",
  fontSize:18,
  color:"rgba(4,4,4,0.7)"
},
disabledText:{
  fontSize:18,
  color:"rgba(84,116,180,0.5)"
},
loginBtn:{
width:"100%",
backgroundColor:"rgb(158,198,116)",
borderRadius:25,
height:50,
marginTop:40
},
disabledBtn:{
  width:"100%",
  backgroundColor:'transparent',
  borderWidth: 0.5,
  borderRadius:25,
  height:50,
  marginTop:40
  },
});
export default App;

// import React, { useEffect } from 'react';
// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
// import { Button,Icon } from 'react-native-elements';
// import { useSelector, useDispatch } from 'react-redux';
// import {setUser} from '../../redux/actions/index';



// function Screen1(props:any) {

//   const [task, setTask] = React.useState('');
//   const  loginData  = useSelector((s:any) => console.log('------',s.login.data));
//   const dispatch = useDispatch();

//   useEffect(() => {
//     handleAddTodo()
//   }, [props])
  

//   const handleAddTodo = () => {
//     let data = {name:'biplov', age:'30'}
//     //@ts-ignore
//     dispatch( setUser(data) )
//   }

//   return (
//     <View style={styles.container}>
//        <Text onPress={()=>  props.navigation.navigate("Screen2")}>Second Screen</Text>
//       {/* <Button title="Hey!" /> */}
//       <Icon
//   raised
//   name='camera'
//   type='font-awesome'
//   color='#f50'
//   onPress={() => console.log('hello')} />
//     </View>
//   );
// }






// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center' }})

//   export default Screen1;











// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import type {PropsWithChildren} from 'react';
import { store } from '../../redux/store/index';




// type SectionProps = PropsWithChildren<{title: string; }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function Screen1({navigation}): JSX.Element {

//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };
// console.log('====================================');
// console.log(navigation);
// console.log('====================================');
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text onPress={()=>  navigation.navigate("Screen2")} style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }


// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default Screen1;