import React from 'react';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import SplashScreen from 'react-native-splash-screen';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '@reducers/reducer';
import AppStack from '@routes/router';

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

class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={STORE}>
        <AppStack />
      </Provider>
    );
  }
}

export default App;
