import React, { Component } from 'react';

import {
    Button
} from 'react-native';

export default class NavButton extends Component {

    render() {
        return <Button { ...this.props } />;
    }

};