import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Input} from 'react-native-elements';
import Colors from '../../utils/colors/index';
const {height, width} = Dimensions.get('window');
let little = height / 7;

// =================Props of Input===================
const CommonInput = props => {
  let {
    placeholder,
    label,
    editable,
    value,
    multiline,
    secureTextEntry,
    autoCapitalize,
    labelStyle,
    placeholderTextColor,
    inputStyle,
    inputContainerStyle,
    leftIconContainerStyle,
    leftIcon,
    rightIcon,
    errorMessage,
    onChangeText,
    onSubmitEditing,
    maxLength,
    keyboardType,
    returnKeyType,
    inputRef,
  } = props;

  // =================Input===================
  return (
    <Input
      ref={inputRef}
      placeholder={placeholder}
      label={label}
      editable={editable}
      value={value}
      multiline={multiline ? multiline : false}
      secureTextEntry={secureTextEntry ? secureTextEntry : false}
      blurOnSubmit={true}
      autoCorrect={false}
      maxLength={maxLength ? maxLength : 30}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
      keyboardAppearance="light"
      labelStyle={[styles.InputLabel, labelStyle]}
      placeholderTextColor={
        placeholderTextColor ? placeholderTextColor : Colors.InputPlace
      }
      errorStyle={styles.InputError}
      errorMessage={errorMessage}
      leftIcon={leftIcon}
      leftIconContainerStyle={[styles.InputLIcon, leftIconContainerStyle]}
      inputContainerStyle={[styles.InputCont, inputContainerStyle]}
      inputStyle={[styles.InputStyle, inputStyle]}
      rightIcon={rightIcon}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  InputLabel: {},
  InputError: {fontSize: height / 65},
  InputLIcon: {paddingLeft: height / little, paddingRight: height / little},
  InputCont: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.InputBG,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 10,
    padding: 20,
    borderBottomWidth: 0,
  },
  InputStyle: {fontSize: height / 45, color: Colors.IText},
});

export default CommonInput;
