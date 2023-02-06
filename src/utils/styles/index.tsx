import {StyleSheet, StatusBar, Dimensions, Platform} from 'react-native';
import Colors from '../colors/index';
const {height, width} = Dimensions.get('window');
let little = height / 7;
export const l_margin = height / 7;
export const Margin = width / 20;
export const MinMargin = width / 40;
export const BigTitleFontSize = height / 35;
export const TitleFontSize = height / 45;
export const BorderRadius = height / 200;
export const ButtonFontSize = height / 60;
export const STATUSBAR_HEIGHT = StatusBar.currentHeight;
export const APPBAR_HEIGHT = Platform.OS === 'ios' ? 50 : 56;

/**
 * @param {*} styles All global styles..
 * will change all style name in this class.
 */

export default StyleSheet.create({
  //--flex realated styles
  fl1: {flex: 1},
  flex07: {flex: 0.7},
  textAlignRight: {textAlign: 'right'},
  flex03AlignCenter: {flex: 0.3, alignItems: 'center'},
  flex1AlignCenter: {flex: 1, alignItems: 'center'},

  // --------------------- LOGIN SCREEN -------------------------
  LoginImgLogoStyle: {
    width: width / 2,
    resizeMode: 'contain',
    height: height / 4,
  },
  screenTitleLogin: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.screenTitleColor,
  },

  // --------------------- LANGUAGE SCREEN -------------------------
  languageLogoContainer: {flex: 0.3, paddingTop: 50, alignItems: 'center'},

  // --------------------- AUTH SCREEN-------------------------
  selectLanguageTitle: {
    fontSize: height / 35,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.IText,
  },

  //  ---------------------Movie COMPONENTS -------------------------
  movieFlatListStyle: {paddingHorizontal: 3},

  w10: {width: '10%'},
  w15: {width: '15%'},
  w20: {width: '20%'},
  w30: {width: '30%'},
  w40: {width: '40%'},
  w50: {width: '50%'},
  w60: {width: '60%'},
  w65: {width: '65%'},
  w70: {width: '70%'},
  w75: {width: '75%'},
  w80: {width: '80%'},
  w90: {width: '90%'},
  w100: {width: '100%'},

  h10: {height: height / 10},
  h15: {height: height / 15},
  h20: {height: height / 20},
  h30: {height: height / 30},
  h40: {height: height / 40},
  h50: {height: height / 50},
  h60: {height: height / 60},
  h65: {height: height / 65},
  h70: {height: height / 70},
  h75: {height: height / 75},
  h80: {height: height / 80},
  h90: {height: height / 90},
  h100: {height: height / 100},

  m10: {margin: height / 10},
  m20: {margin: height / 20},
  m30: {margin: height / 30},
  m40: {margin: height / 40},
  m50: {margin: height / 50},
  m60: {margin: height / 60},
  m70: {margin: height / 70},
  m80: {margin: height / 80},
  m90: {margin: height / 90},
  m100: {margin: height / 100},

  p10: {padding: height / 10},
  p20: {padding: height / 20},
  p30: {padding: height / 30},
  p40: {padding: height / 40},
  p50: {padding: height / 50},
  p60: {padding: height / 60},
  p70: {padding: height / 70},
  p80: {padding: height / 80},
  p90: {padding: height / 90},
  p100: {padding: height / 100},

  mt10: {marginTop: height / 10},
  mt20: {marginTop: height / 20},
  mt25: {marginTop: height / 25},
  mt30: {marginTop: height / 30},
  mt40: {marginTop: height / 40},
  mt50: {marginTop: height / 50},
  mt60: {marginTop: height / 60},
  mt70: {marginTop: height / 70},
  mt80: {marginTop: height / 80},
  mt90: {marginTop: height / 90},
  mt100: {marginTop: height / 100},

  mb4: {marginBottom: height / 4},
  mb3_8: {marginBottom: height / 3.8},

  mb5: {marginBottom: height / 5},
  mb5_5: {marginBottom: height / 5.5},
  mb6: {marginBottom: height / 6},
  mb7: {marginBottom: height / 7},
  mb10: {marginBottom: height / 10},
  mb15: {marginBottom: height / 15},
  mb20: {marginBottom: height / 20},
  mb30: {marginBottom: height / 30},
  mb40: {marginBottom: height / 40},
  mb50: {marginBottom: height / 50},
  mb60: {marginBottom: height / 60},
  mb70: {marginBottom: height / 70},
  mb80: {marginBottom: height / 80},
  mb90: {marginBottom: height / 90},
  mb100: {marginBottom: height / 100},

  ml10: {marginLeft: height / 10},
  ml20: {marginLeft: height / 20},
  ml30: {marginLeft: height / 30},
  ml40: {marginLeft: height / 40},
  ml50: {marginLeft: height / 50},
  ml60: {marginLeft: height / 60},
  ml70: {marginLeft: height / 70},
  ml80: {marginLeft: height / 80},
  ml90: {marginLeft: height / 90},
  ml100: {marginLeft: height / 100},

  ph10: {paddingHorizontal: height / 10},
  ph20: {paddingHorizontal: height / 20},
  ph30: {paddingHorizontal: height / 30},
  ph40: {paddingHorizontal: height / 40},
  ph50: {paddingHorizontal: height / 50},
  ph60: {paddingHorizontal: height / 60},
  ph70: {paddingHorizontal: height / 70},
  ph80: {paddingHorizontal: height / 80},
  ph90: {paddingHorizontal: height / 90},
  ph100: {paddingHorizontal: height / 100},
  pMargin: {paddingHorizontal: Margin},

  pv10: {paddingVertical: height / 10},
  pv20: {paddingVertical: height / 20},
  pv30: {paddingVertical: height / 30},
  pv40: {paddingVertical: height / 40},
  pv50: {paddingVertical: height / 50},
  pv60: {paddingVertical: height / 60},
  pv70: {paddingVertical: height / 70},
  pv80: {paddingVertical: height / 80},
  pv90: {paddingVertical: height / 90},
  pv100: {paddingVertical: height / 100},
  pPadding: {paddingVertical: Margin},

  mh_15: {marginHorizontal: '15%'},
  mh_20: {marginHorizontal: '20%'},
  mh20: {marginHorizontal: height / 20},
  mh40: {marginHorizontal: height / 40},
  mh80: {marginHorizontal: height / 80},
  mh90: {marginHorizontal: height / 90},
  mh100: {marginHorizontal: height / 100},

  mv15: {marginVertical: height / 15},
  mv20: {marginVertical: height / 20},
  mv30: {marginVertical: height / 30},
  mv40: {marginVertical: height / 40},
  mv50: {marginVertical: height / 50},
  mv60: {marginVertical: height / 60},
  mv80: {marginVertical: height / 80},
  mv100: {marginVertical: height / 100},
});
