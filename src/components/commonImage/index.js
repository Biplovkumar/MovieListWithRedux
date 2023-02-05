import React from "react";
import { ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements'

// =================Props of Image===================

const CommonImage = (props) => {
  let { source, imgStyle, key } = props;

  // =================Image===================
  return (
    <Image
      source={source}
      key={key}
      defaultSource={source}
      style={imgStyle}
      PlaceholderContent={<ActivityIndicator />}
    />
  );
}


export default CommonImage;