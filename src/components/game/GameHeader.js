import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Dot from '../commons/Dot';

const GameHeader = () => {
  const theme = useSelector((state) => state.theme);
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme.isDark ? '#0e0e0e' : '#EEE' },
      ]}>
      <Dot />
    </View>
  );
};

export default GameHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 300,
  },
});
