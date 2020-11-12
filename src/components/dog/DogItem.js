import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image';

const WIDTH = Dimensions.get('window').width;

const DogItem = ({ name }) => {
  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    getImageUrl(name);
  }, []);

  const getImageUrl = async (name) => {
    await fetch(`https://dog.ceo/api/breed/${name}/images/random`)
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.message);
      });
  };
  return (
    <View style={styles.itemContainer}>
      <FastImage
        source={{ uri: imageUrl, priority: FastImage.priority.high }}
        style={styles.image}
      />
      <Text>{name}</Text>
    </View>
  );
};

export default DogItem;

const styles = StyleSheet.create({
  itemContainer: {
    width: WIDTH / 2,
  },
  image: {
    width: WIDTH / 2,
    aspectRatio: 1,
  },
});
