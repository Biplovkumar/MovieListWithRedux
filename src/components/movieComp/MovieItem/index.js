import React from 'react';
import { Text } from 'react-native';
import config from '../../../utils/config/index';
import FastImage from 'react-native-fast-image';
import Card from '../Card/index';
import styles from '../../compStyles/index';

const MovieItem = ({ movie }) => {
  return (
    <Card style={styles().cardItemcont}>
      <>
        <FastImage
          source={{ uri: config.posterPath + movie.poster_path }}
          style={styles().cardImage}
          resizeMode="cover"
        />
        <Text style={styles().cardTitle} numberOfLines={2}>
          {movie.title}
        </Text>
      </>
    </Card>
  );
};


export default MovieItem;
