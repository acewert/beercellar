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

export class BeerList extends Component {

    constructor(props) {
        super(props);
        const {
            beers
        } = props;

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.dataSource = ds.cloneWithRows(beers);
    }

    render() {
        return (
            <View style={ styles.container }>
                <ListView dataSource={this.dataSource} renderRow={this.rowRenderer} />
            </View>
        );
    }

    rowRenderer(beer) {
        return (
            <View>
                <Text>{ beer.brewery }</Text>
                <Text>{ beer.name }</Text>
            </View>
        );
    }
};

export default connect()(BeerList);