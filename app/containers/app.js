import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';

import store from '../store'

import { Router, Scene } from 'react-native-router-flux';

import {
    DASHBOARD_TITLE,
    FOR_TRADE_TITLE,
    MY_CELLAR_TITLE,
    IN_SEARCH_OF_TITLE,
    WELCOME_TITLE
} from '../constants';

import WelcomeScene from './welcome';
import Dashboard from './dashboard';
import MyCellar from './MyCellar';
import InSearchOf from './InSearchOf';

const ReduxRouter = connect()(Router);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ReduxRouter>
            <Scene key="root">
                <Scene key="WelcomeScene" component={WelcomeScene} title={WELCOME_TITLE} initial={true} />
                <Scene key="Dashboard" component={Dashboard} title={DASHBOARD_TITLE} rightTitle="Edit" onRight={()=>console.warn('sadasd')} rightButtonImage={ {source: "https://placekitten.com/64/64"} }/>
                <Scene key="MyCellar" component={MyCellar} title={MY_CELLAR_TITLE} />
                <Scene key="ISO" component={InSearchOf} title={IN_SEARCH_OF_TITLE} />
            </Scene>
        </ReduxRouter>
      </Provider>
    );
  }
};