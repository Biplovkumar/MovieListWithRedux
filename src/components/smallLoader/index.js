import {ActivityIndicator} from 'react-native';

//Small loader for listview footer.
const Loader = (props, ...otherProps) => {
  return (
    <ActivityIndicator size={'large'} {...otherProps} testID=" small-loader" />
  );
};

export default Loader;
