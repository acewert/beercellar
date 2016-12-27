import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import store from '../store'

import { Router, Scene } from 'react-native-router-flux';
import WelcomeScene from './welcome';

const ReduxRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
            <Scene key="WelcomeScene" component={WelcomeScene} title={'Welcome!'} initial={true} />
        </ReduxRouter>
      </Provider>
    );
  }
};