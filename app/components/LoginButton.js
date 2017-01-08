import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Button
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../styles';

import api from '../api';

import {
    RECEIVE_PROFILE,
    USER_ENDPOINTS
} from '../constants';

export class LoginButton extends Component {

    render() {
        const {
            login,
            user
        } = this.props;
        const text = this.getButtonText(user);
        return (
            <Button // convert to NavButton, and make it use TouchableNativeFeedback https://facebook.github.io/react-native/docs/touchablenativefeedback.html
                style={ styles.nav.button }
                onPress={ login }
                title={ text } />
        );
    }

    getButtonText(user) {
        return user && user.isLoggedIn && user.displayName ?
            `Welcome back, ${user.displayName}` :
            'Please login to continue';
    }

} 

export const mapStateToProps = (state, props) => {
    const user = state.user;
    return Object.assign({}, {
        user
    });
};

export const mapDispatchToProps = (dispatch, props) => {
    return {
        login: () => {
            api.users.login()
                .then(response => {
                    const {
                        user
                    } = response;

                    dispatch({
                        type: RECEIVE_PROFILE,
                        payload: user
                    });
                    Actions.Dashboard();
                });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);