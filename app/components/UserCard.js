import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

import Avatar from '../components/Avatar';

export class UserCard extends Component {
    render() {
        const {
            user
        } = this.props;
        return (
            <View style={ styles.container }>
                <Avatar source={ user.avatar.medium } />
                <Text style={ styles.heading }>
                    { user.displayName }
                </Text>
            </View>
        );
    }
};

export const mapStateToProps = (state, props) => {
    const user = state.user;
    return Object.assign({}, {
        user
    });
};

export default connect(mapStateToProps)(UserCard);