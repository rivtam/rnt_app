import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: '#fff'
  }
});

export { Card };
