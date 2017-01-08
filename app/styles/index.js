import {
        StyleSheet
} from 'react-native';

export const colorTheme = {
    black: '#000000',
    darkBlue: '#003B73',
    lightBlue: '#0084FF',
    nearBlack: '#333333',
    nearWhite: '#f4f4f4',
    mediumOrange: '#BF7700',
    white: '#ffffff'
};

export const styles = {
    avatars: StyleSheet.create({
        medium: {
            width: 320,
            height: 320
        }
    }),
    containers: StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorTheme.white
        },
        containerWithNav: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorTheme.white,
            paddingTop: 64
        }
    }),
    headings: StyleSheet.create({
        heading: {
            fontSize: 40,
            textAlign: 'center',
            margin: 10,
            color: colorTheme.nearBlack
        }
    }),
    nav: StyleSheet.create({
        button: {
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
            padding: 40,
            color: colorTheme.white,
            backgroundColor: colorTheme.lightBlue
        }
    }),
    beerList: StyleSheet.create({
        list: {
            flex: 1,
            flexDirection: 'column',
            backgroundColor: colorTheme.white
        },
        item: {
            borderBottomWidth: 1,
            borderBottomColor: colorTheme.nearWhite,
            height: 50,
            flex: 1,
            paddingHorizontal: 15,
            paddingVertical: 5
        }
    })
};

export default styles;