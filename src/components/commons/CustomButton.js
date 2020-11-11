import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  ViewPropTypes,
} from 'react-native';
import RippleButton from './RippleButton';
import PropTypes from 'prop-types';

const CustomButton = (props) => {
  const MyButton =
    Platform.OS === 'android' && Platform.Version >= 21
      ? RippleButton
      : TouchableOpacity;

  return (
    <MyButton
      activeOpacity={0.7}
      rippleOpacity={0.1}
      useForeground={true}
      style={[styles.card, props.style]}
      onPress={props.onPress}>
      {props.children}
    </MyButton>
  );
};

CustomButton.prototype = {
  style: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomButton;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: 'white',
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
