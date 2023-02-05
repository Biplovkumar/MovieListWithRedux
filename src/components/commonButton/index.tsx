import React from "react";
import {Button} from "react-native-elements"
import Styles from '../compStyles/index'

// =================Props of Button===================
const CommonButton = (props:any) => {
  let { loading, title, onPress, disabled, disabledStyle, disabledTitleStyle, buttonStyle, titleStyle } = props;

  // =================Button===================
  return (
    <Button
    title={title}
    loading={loading}
    onPress={onPress}
    disabled={disabled}
    disabledStyle={[Styles(false).disabledBtnStyle, disabledStyle]}
    disabledTitleStyle={[Styles(false).disabledTitleStyle, disabledTitleStyle]}
    buttonStyle={[Styles(false).loginBtnStyle, buttonStyle]}
    titleStyle={[Styles(false).loginBtnTextStyle, titleStyle]}
  />
  );
}

export default CommonButton;