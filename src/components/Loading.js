import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#4F6D7A',
    opacity: 0.8,
  },
});

const Loading = (props) => {
  const { transparent } = props;

  if (transparent) {
    return (
      <View style={[style.container, { backgroundColor: 'transparent' }]}>
        <ActivityIndicator size={50} color="#4682B4" />
      </View>
    );
  }
  return (
    <View style={style.container}>
      <ActivityIndicator size={90} color="#FFFFFF" />
    </View>
  );
};

Loading.propTypes = {
  transparent: PropTypes.bool,
};

Loading.defaultProps = {
  transparent: false,
};

export default Loading;
