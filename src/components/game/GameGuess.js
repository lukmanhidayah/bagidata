import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomButton from '../commons/CustomButton';

const GameGuess = ({ res, onPress, theme }) => {
  return (
    <CustomButton
      onPress={() => {
        onPress(res);
      }}
      style={[
        styles.listBreedsContent,
        { backgroundColor: theme.colors.primary },
      ]}>
      <Text style={[styles.breedsText, { color: theme.colors.thinBackground }]}>
        {res.charAt(0).toUpperCase() + res.substr(1)}
      </Text>
    </CustomButton>
  );
};

export default GameGuess;

const styles = StyleSheet.create({
  listBreedsContent: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 100,
    margin: 10,
  },
  breedsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
