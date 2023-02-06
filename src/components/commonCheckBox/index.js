import React from "react";
import { CheckBox } from 'react-native-elements'
import Colors from '../../utils/colors/index'
import { StyleSheet } from "react-native";

// =================Props of checkbox===================
const CommonCheckBox = (props) => {
  let { title, checkRef, textStyle, containerStyle, iconType, checkedIcon, uncheckedIcon, checkedColor, uncheckedColor,
    checked, onPress } = props;

  // =================Checkbox===================
  return (
    <CheckBox
      ref={checkRef}
      center
      title={title}
      textStyle={textStyle}
      iconRight
      containerStyle={[styles.checkboxCont, containerStyle]}
      iconType={iconType}
      checkedIcon={checkedIcon ? checkedIcon : 'dot-circle-o'}
      uncheckedIcon={uncheckedIcon ? uncheckedIcon : 'circle-o'}
      checkedColor={checkedColor ? checkedColor : Colors.theme2}
      uncheckedColor={uncheckedColor ? uncheckedColor : Colors.Silver}
      checked={checked}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  checkboxCont: { borderRadius: 25, borderColor: Colors.InputLabel, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent' },
});

export default CommonCheckBox;