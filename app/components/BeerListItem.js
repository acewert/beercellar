import React, { Component } from 'react';

import {
    connect
} from 'react-redux';

import {
    Text,
    View
} from 'react-native';

import styles from '../styles';

export class BeerListItem extends Component {

    render() {
        const {
            beer
        } = this.props;
        
        return (
            <View style={ styles.beerList.item }>
                <Text>{ beer.brewery }</Text>
                <Text>{ beer.name }</Text>
            </View>
        );
    }
};

export default connect()(BeerListItem);