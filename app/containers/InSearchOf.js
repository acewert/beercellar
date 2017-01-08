import React, { Component } from 'react';
import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

export default class InSearchOf extends Component {
    render() {
        return (
            <View style={ styles.containers.container }>
                <Text style={ styles.headings.heading }>
                    ISO!
                </Text>
            </View>
        );
    }
};