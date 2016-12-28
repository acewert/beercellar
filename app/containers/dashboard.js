import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Button,
    View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import styles from '../styles';

import {
    NavButton,
    UserCard
} from '../components';


export class Dashboard extends Component {
    render() {
        const {
            goToISO,
            goToMyCellar,
            navigator,
            user
        } = this.props;

        return (
            <View style={ styles.container }>
                <UserCard user={ user } />
                <Button
                    style={ styles.navButton }
                    title="My Cellar"
                    onPress={goToMyCellar} />
                <Button
                    style={ styles.navButton }
                    title="In Search Of"
                    onPress={goToISO} />
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
        goToISO: () => {
            Actions.ISO();
        },
        goToMyCellar: () => {
            Actions.MyCellar();
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);