import React from 'react';
import {Text, StyleSheet} from 'react-native';
import config from '../../../utils/config/index';
import FastImage from 'react-native-fast-image';
import Card from '../Card/index';
import colors from '../../../utils/colors';

//Movie item like image and title
//react-native-fast-image --for caching the images.
const MovieItem = ({movie}) => {
  return (
    <Card style={styles.cardItemcont}>
      <>
        <FastImage
          source={{uri: config.posterPath + movie.poster_path}}
          style={styles.cardImage}
          resizeMode="cover"
        />
        <Text style={styles.cardTitle} numberOfLines={2}>
          {movie.title}
        </Text>
      </>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardItemcont: {
    flex: 1,
    marginBottom: 12,
    marginHorizontal: 6,
    backgroundColor: colors.theme2,
    alignItems: 'center',
    borderColor: colors.LightTheme,
    borderWidth: 0.8,
  },
  cardImage: {width: '100%', height: 170},
  cardTitle: {
    fontSize: 14,
    color: colors.White,
    textAlign: 'center',
    marginVertical: 10,
    marginHorizontal: 12,
  },
});

export default MovieItem;
