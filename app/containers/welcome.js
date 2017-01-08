import React, { Component } from 'react';
import {
        Text,
        View
} from 'react-native';

import {
    styles
} from '../styles';

import LoginButton from '../components/LoginButton';

export default class WelcomeScene extends Component {
    render() {
        return (
            <View style={ styles.containers.container }>
                <Text style={ styles.headings.heading }>
                    Welcome to Beer Cellar! 🍻
                </Text>
                <LoginButton />
            </View>
        );
    }

    static renderNavigationBar(props) {
        return null;
    }
};