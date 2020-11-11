import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const WIDTH = Dimensions.get('window').width;

const CustomHeader = ({ title, headerStyle, titleStyle }) => {
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    width: WIDTH,
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
    padding: 15,
    justifyContent:'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3c122cff'
  },
});
