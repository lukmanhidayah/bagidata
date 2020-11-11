import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import CustomButton from '../commons/CustomButton';
import PropTypes from 'prop-types';

const dimensions = Dimensions.get('window');

const HomeList = ({ data, navigation }) => {
  return (
    <CustomButton
      onPress={() => {
        navigation.navigate(data.navigation, { screen: data.navigation });
      }}
      style={styles.card(data.color)}>
      <View style={styles.itemContainer}>
        <View style={styles.itemText}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.desc}>{data.description}</Text>
        </View>
        <Image
          source={data.imageUrl}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </CustomButton>
  );
};

HomeList.prototype = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default HomeList;

const styles = StyleSheet.create({
  card: (bg) => ({
    height: dimensions.height * 0.25,
    width: dimensions.width * 0.9,
    alignSelf: 'center',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: bg || 'white',
  }),
  itemContainer: {
    width: '100%',
    height: '100%',
  },
  itemText: {
    width: '60%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  desc: {
    fontSize: 16,
    color: '#ddd',
  },
  image: {
    height: dimensions.height * 0.25 * 0.8,
    width: '40%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
