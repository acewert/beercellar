import React, { Component } from 'react';
import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

export default class MyCellar extends Component {
    render() {
        const {
            navigator
        } = this.props;
        return (
            <View style={ styles.container }>
                <Text style={ styles.heading }>
                    Your cellar!
                </Text>
                <Text>
                    There will be a list here. Promise.
                </Text>
            </View>
        );
    }
};