import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
        Text,
        View
} from 'react-native';

import styles from '../styles';

import UserCard from '../components/UserCard';

export class Dashboard extends Component {
    render() {
        const {
            navigator,
            user
        } = this.props;
        return (
            <View style={ styles.container }>
                <UserCard user={ user } />
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

export const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);