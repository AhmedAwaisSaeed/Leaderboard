import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../src/store';
import App from '../App';

test('renders App correctly', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
