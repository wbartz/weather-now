import React from 'react';
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

const Loading = () => (
  <View style={style.container}>
    <ActivityIndicator size={90} color="#FFFFFF" />
  </View>
);

export default Loading;
