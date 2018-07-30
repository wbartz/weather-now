import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    width: 65,
    height: 65,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  icon: {
    color: '#FFFFFF',
    fontSize: 25,
  },
});

const Button = props => (
  <TouchableHighlight style={[styles.container, props.style]} onPress={() => props.navigation.navigate('Cities')}>
    <Icon name="magnify" style={styles.icon} />
  </TouchableHighlight>
);

Button.propTypes = {
  style: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

Button.defaultProps = {
  style: {},
};

export default Button;
