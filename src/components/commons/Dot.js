import React from 'react';
import { StyleSheet, View } from 'react-native';

const Dot = () => {
  return (
    <>
      <View style={styles.dot1} />
      <View style={styles.dot2} />
      <View style={styles.dot3} />
      <View style={styles.dot4} />
      <View style={styles.dot5} />
      <View style={styles.dot6} />
      <View style={styles.dot7} />
      <View style={styles.dot8} />
      <View style={styles.dot9} />
    </>
  );
};

export default Dot;

const styles = StyleSheet.create({
  dot1: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 6,
    height: 6,
    borderRadius: 6,
    position: 'absolute',
    bottom: 20,
    left: 60,
  },
  dot2: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    bottom: 30,
    right: 60,
  },
  dot3: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    left: 100,
    top: 150,
  },
  dot4: {
    backgroundColor: 'rgba(101, 66, 53,.2)',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    left: 180,
    top: 45,
  },
  dot5: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 6,
    height: 6,
    borderRadius: 6,
    position: 'absolute',
    left: 60,
    top: 95,
  },
  dot6: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 6,
    height: 6,
    borderRadius: 6,
    position: 'absolute',
    right: 190,
    top: 95,
  },
  dot7: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    right: 240,
    top: 180,
  },
  dot8: {
    backgroundColor: 'rgba(101, 66, 53,.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    position: 'absolute',
    right: 80,
    top: 25,
  },
  dot9: {
    backgroundColor: 'rgba(101, 66, 53,.2)',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
  },
});
