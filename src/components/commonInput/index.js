import React from "react";
import { View } from "react-native";
import { Input } from 'react-native-elements'
import Colors from '../../utils/colors/index'
import Styles from '../compStyles/index'

// =================Props of Input===================
const CommonInput = (props) => {
  let { placeholder, label, editable, value, multiline, secureTextEntry, autoCapitalize, labelStyle,
    placeholderTextColor, inputStyle, inputContainerStyle, leftIconContainerStyle, leftIcon, rightIcon,
    errorMessage, onChangeText, onSubmitEditing, maxLength, keyboardType, returnKeyType, inputRef } = props;

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
      autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
      keyboardAppearance="light"
      labelStyle={[Styles(value).InputLabel, labelStyle]}
      placeholderTextColor={placeholderTextColor ? placeholderTextColor : Colors.InputPlace}
      errorStyle={Styles().InputError}
      errorMessage={errorMessage}
      leftIcon={leftIcon}
      leftIconContainerStyle={[Styles().InputLIcon, leftIconContainerStyle]}
      inputContainerStyle={[Styles().InputCont, inputContainerStyle]}
      inputStyle={[Styles().InputStyle, inputStyle]}
      rightIcon={rightIcon}
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
    />
  );
}


export default CommonInput;