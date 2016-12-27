import {
    StyleSheet
} from 'react-native';

const colorTheme = {
  darkBlue: '#003B73',
  mediumBlue: '',
  lightBlue: '#0084FF',
  mediumOrange: '#BF7700',
  white: '#f4f4f4'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorTheme.darkBlue
  },
  login: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: colorTheme.white
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: colorTheme.white
  }
});

export default styles;