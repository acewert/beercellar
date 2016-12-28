import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import store from '../store'

import { Router, Scene } from 'react-native-router-flux';

import {
    WelcomeScene,
    Dashboard
} from '../containers';

const ReduxRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
            <Scene key="root">
                <Scene key="WelcomeScene" component={WelcomeScene} title={'Welcome!'} initial={true} />
                <Scene key="Dashboard" component={Dashboard} title={'Home!'} />
                <Scene key="MyCellar" component="MyCellar" title={'My Cellar'} />
            </Scene>
        </ReduxRouter>
      </Provider>
    );
  }
};