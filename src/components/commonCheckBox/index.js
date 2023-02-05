import React from "react";
import { CheckBox } from 'react-native-elements'
import Colors from '../../utils/colors/index'
import Styles from '../compStyles/index'

// =================Props of checkbox===================
const commonCheckBox = (props) => {
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
      containerStyle={[Styles().checkboxCont, containerStyle]}
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


export default commonCheckBox;