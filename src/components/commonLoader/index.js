import React from 'react';
import {ActivityIndicator, StyleSheet, Dimensions, View} from 'react-native';
import colors from '../../utils/colors';
const {height, width} = Dimensions.get('window');
//Loader Component for loading apis
const CommonLoader = props => {
  return (
    <View style={[styles.LoaderCont, props.viewStyle]}>
      <View style={styles.LoaderCircle}>
        <ActivityIndicator size="large" color={Colors.ILoaderBG} />
      </View>
    </View>
  );
};
export default CommonLoader;

const styles = StyleSheet.create({
  LoaderCont: {
    zIndex: 1,
    width: width,
    height: height / 1.2,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.LoaderBG,
  },
  LoaderCircle: {
    elevation: 2,
    width: height / 12,
    height: height / 12,
    borderRadius: height / 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.White,
  },
});
