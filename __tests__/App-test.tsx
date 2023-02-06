/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


jest.mock('../src/navigations/RootNavigator', () => 'RootNavigator');
jest.mock('../src/utils/SharedPreferences', () => ({
  get: jest.fn(() => Promise.resolve(null)),
  save: jest.fn(),
}));

it('renders correctly', () => {
  renderer.create(<App />);
});

