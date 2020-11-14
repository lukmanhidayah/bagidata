import React from 'react';
import { StyleSheet, Text } from 'react-native';
import CustomButton from '../commons/CustomButton';

const GameMessage = ({ messageText = '', theme }) => {
  return (
    <CustomButton
      style={[
        styles.messageContainer,
        {
          backgroundColor: theme.colors.thinBackground,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: theme.colors.primary,
          },
        ]}>
        {messageText}
      </Text>
    </CustomButton>
  );
};

export default GameMessage;

const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
