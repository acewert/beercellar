import React, { Component } from 'react';

import {
    ListView
} from 'react-native';

import {
    BeerListItem
} from './BeerListItem';

import styles from '../styles';

export class BeerList extends Component {

    constructor(props) {
        super(props);
        const {
            beers
        } = props;

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(beers);
    }

    render() {
        return (
            <ListView
                style={ styles.beerList.list }
                dataSource={ this.dataSource }
                renderRow={ this.rowRenderer } />
        )
    }

    rowRenderer(beer) {
        return (
            <BeerListItem beer={ beer } />
        );
    }
};

export default BeerList;