import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import store from '../src/store';
import Home from '../src/screens/Home';

test('button render correctly', async () => {
  const {getByText} = render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );

  const button = getByText('Search');
  expect(button).toBeDefined();
});
