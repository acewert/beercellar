import {
        StyleSheet
} from 'react-native';

export const colorTheme = {
    darkBlue: '#003B73',
    mediumBlue: '',
    lightBlue: '#0084FF',
    mediumOrange: '#BF7700',
    white: '#f4f4f4'
};

const styles = StyleSheet.create({
    avatarMedium: {
        width: 320,
        height: 320
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorTheme.darkBlue,
        paddingTop: 100
    },
    heading: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: colorTheme.white
    },
    navButton: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        padding: 40,
        color: colorTheme.white,
        backgroundColor: colorTheme.lightBlue
    }
});

export default styles;