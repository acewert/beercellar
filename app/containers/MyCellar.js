import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Text,
    View
} from 'react-native';

import {
    BeerList
} from '../components';

import styles from '../styles';

export class MyCellar extends Component {
    render() {
        const {
            navigator,
            owned
        } = this.props;

        const OwnedList = owned.length
            ? <BeerList beers={ owned } />
            : <Text>Empty List</Text>;
        return (
            <View style={ styles.containers.containerWithNav }>
                { OwnedList }
            </View>
        );
    }
};

export const mapStateToProps = (state, props) => {
    const {
        user: {
            beers: {
                owned
            }
        }
    } = state;
    return Object.assign({}, {
        owned
    });
};

export const mapDispatchToProps = (dispatch, props) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCellar);