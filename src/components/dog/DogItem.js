import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import LocalImage from '../../assets/images/LocalImage';
import CustomButton from '../commons/CustomButton';

const WIDTH = Dimensions.get('window').width;

const DogItem = ({ name, theme }) => {
  const [imageUrl, setImageUrl] = useState(undefined);
  const [height, setHeight] = useState(undefined);
  useEffect(() => {
    const newController = new AbortController();
    getImageUrl(name, newController);
    return () => {
      newController.abort();
    };
  }, []);

  const getImageUrl = async (name, controller) => {
    await fetch(`https://dog.ceo/api/breed/${name}/images/random`, {
      method: 'GET',
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        setImageUrl(res.message);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          return;
        }
      });
  };

  return (
    <CustomButton style={[styles.itemContainer(theme.colors.thinBackground)]}>
      <View style={styles.titleContainer}>
        <View style={styles.headerImageContainer(theme.colors.background)}>
          <FastImage source={LocalImage.dogs} style={styles.headerImage} />
        </View>
        <Text style={{ color: 'white' }}>{name}</Text>
      </View>
      <FastImage
        source={{ uri: imageUrl, priority: FastImage.priority.high }}
        style={[styles.image]}
        resizeMode={FastImage.resizeMode.cover}
      />
    </CustomButton>
  );
};

export default DogItem;

const styles = StyleSheet.create({
  itemContainer: (bg) => ({
    width: '100%',
    marginBottom: 20,
    backgroundColor: bg,
    borderRadius: 5,
    overflow: 'hidden',
  }),
  titleContainer: {
    width: '100%',
    padding: 15,
    paddingBottom: 10,
    flexDirection: 'row',
  },
  headerImageContainer: (bg) => ({
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: bg,
    marginRight: 10,
    padding: 5,
  }),
  headerImage: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    alignSelf: 'center',
    aspectRatio: 1,
  },
});
