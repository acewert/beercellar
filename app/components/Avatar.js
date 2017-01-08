import React, { Component } from 'react';

import {
        Image
} from 'react-native';

import styles from '../styles';

export default class Avatar extends Component {
    render() {
        const {
            source
        } = this.props;
        return (
            <Image
                style={ styles.avatars.medium }
                source={ { uri: source } }
            />
        );
    }
};