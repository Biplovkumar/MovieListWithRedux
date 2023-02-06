import React from 'react';
import { View,StyleSheet } from 'react-native';
import colors from '../../../utils/colors';


///Movie card to display the images
const Card = (props) => {
 let  {style, children} = props
  return <View style={[styles.cardCont, style ]}>{children}</View>;
};

const styles = StyleSheet.create({
  cardCont: { borderRadius: 10, backgroundColor: colors.White, marginBottom: 20, overflow: 'hidden', shadowColor: colors.Black, shadowOffset: { width: 0, height: 1, }, shadowOpacity: 0.2, shadowRadius: 1.41, elevation: 2 },
});

export default Card;