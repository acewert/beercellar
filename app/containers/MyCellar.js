import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    ListView,
    Text,
    View
} from 'react-native';

import styles from '../styles';

export class MyCellar extends Component {
    render() {
        const {
            navigator,
            owned
        } = this.props;

        const OwnedList = owned.length ? owned.map(beer => {
            return <Text key={ beer.name }>{ `${beer.brewery} - ${beer.name}` }</Text>;
        }) : <Text>Empty List</Text>
        return (
            <View style={ styles.container }>
                <Text style={ styles.heading }>
                    Your cellar!
                </Text>
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