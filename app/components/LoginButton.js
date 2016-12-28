import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

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
            const user = {
                avatar: {
                    large: "https://placekitten.com/640/640",
                    medium: "https://placekitten.com/320/320",
                    small: "https://placekitten.com/64/64"
                },
                displayName: "Stanley Parable",
                email: "stanley@valve.com",
                id: "1"
            };
            dispatch({
                type: 'RECEIVE_PROFILE',
                payload: user
            });
            Actions.Dashboard();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginButton);