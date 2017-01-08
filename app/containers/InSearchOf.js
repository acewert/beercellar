import React, { Component } from 'react';
import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

export default class InSearchOf extends Component {
    render() {
        const {
            navigator
        } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.heading }>
                    ISO!
                </Text>
            </View>
        );
    }
};