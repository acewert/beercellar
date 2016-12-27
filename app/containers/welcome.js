import React, { Component } from 'react';
import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

import LoginButton from '../components/LoginButton';

export default class WelcomeScene extends Component {
    render() {
        const {
            navigator
        } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>
                    Welcome to Beer Cellar!
                </Text>
                <LoginButton navigator={ navigator } />
            </View>
        );
    }
};