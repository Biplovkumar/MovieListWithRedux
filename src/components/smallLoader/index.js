import { ActivityIndicator } from 'react-native';

const Loader = (props, ...otherProps) => {
  return <ActivityIndicator size={'large'} {...otherProps} testID=" small-loader" />;
};

export default Loader;