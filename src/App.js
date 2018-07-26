import React from 'react';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'native-base';

import reducer from './reducers';
import AppStack from './routes';

const CLIENT = axios.create({
  responseType: 'json',
});

const STORE = createStore(
  reducer,
  applyMiddleware(
    axiosMiddleware(
      CLIENT,
    ),
  ),
);

const App = () => (
  <Provider store={STORE}>
    <Container>
      <AppStack />
    </Container>
  </Provider>
);

export default App;
