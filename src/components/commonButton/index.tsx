import React from "react";
import {Button} from "react-native-elements"
import { StyleSheet } from "react-native";

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
    disabledStyle={[styles.disabledBtnStyle, disabledStyle]}
    disabledTitleStyle={[styles.disabledTitleStyle, disabledTitleStyle]}
    buttonStyle={[styles.loginBtnStyle, buttonStyle]}
    titleStyle={[styles.loginBtnTextStyle, titleStyle]}
  />
  );
}


const styles = StyleSheet.create({
  loginBtnTextStyle: { fontWeight: "bold", fontSize: 18, color: "rgba(4,4,4,0.7)" },
  disabledTitleStyle: { fontSize: 18, color: "rgba(84,116,180,0.5)" },
  loginBtnStyle: { width: "100%", backgroundColor: "rgb(158,198,116)", borderRadius: 25, height: 50 },
  disabledBtnStyle: { width: "100%", backgroundColor: 'transparent', borderWidth: 0.5, borderRadius: 25, height: 50, marginTop: 40 },
});


export default CommonButton;
