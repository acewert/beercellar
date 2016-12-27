import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Text
} from 'react-native';

import {
        HANDLE_LOGIN
} from '../actions';

import styles from '../styles';

export class LoginButton extends Component {

    render() {
        const {
            login,
            navigator,
            user
        } = this.props;
        const text = this.getButtonText(user);
        return (<Text style={ styles.login } onPress={ login }>{ text }</Text>);
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
            dispatch({
                type: HANDLE_LOGIN,
                payload: {
                    isLoggedIn: true,
                    displayName: 'Brandon'
                }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);