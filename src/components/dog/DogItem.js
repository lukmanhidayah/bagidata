import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import LocalImage from '../../assets/images/LocalImage';
import { addLiked, removeLiked } from '../../redux/actions/likeAction';
import CustomButton from '../commons/CustomButton';
import CustomImage from '../commons/CustomImage';

const DogItem = ({ name, theme, index }) => {
  const dispatch = useDispatch();
  const like = useSelector((state) => state.like);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [isLoved, setIsLoved] = useState(name === like.data[index]);
  const [heartUrl, setHeartUrl] = useState(
    name === like.data[index] ? LocalImage.heartOn : LocalImage.darkHeart,
  );
  useEffect(() => {
    const newController = new AbortController();
    getImageUrl(name, newController);
    return () => {
      newController.abort();
    };
  }, []);

  const onPressHeart = useCallback(() => {
    if (!isLoved) {
      setHeartUrl(LocalImage.heartOn);
      setIsLoved(true);
      dispatch(addLiked({ index: index, value: name }));
    } else {
      setHeartUrl(LocalImage.darkHeart);
      setIsLoved(false);
      dispatch(removeLiked(index));
    }
  }, [isLoved]);

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
    <View style={styles.buttonContainer}>
      <CustomButton style={[styles.itemContainer(theme.colors.thinBackground)]}>
        <CustomImage imageUrl={imageUrl} imageStyle={styles.image} />
        <View style={styles.titleContainer}>
          <View style={styles.headerImageContainer(theme.colors.background)}>
            <FastImage source={LocalImage.dogs} style={styles.headerImage} />
          </View>
          <Text style={styles.headerTitle(theme.colors.primary)}>
            {name.charAt(0).toUpperCase() + name.substring(1)}
          </Text>
        </View>
      </CustomButton>
      <TouchableOpacity
        disabled={false}
        style={styles.buttonLove}
        onPress={onPressHeart}>
        <FastImage
          source={heartUrl}
          style={styles.imageLove}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    </View>
  );
};

export default DogItem;

const styles = StyleSheet.create({
  buttonContainer: {
    marginBottom: 20,
  },
  itemContainer: (bg) => ({
    width: '100%',
    backgroundColor: bg,
    borderRadius: 5,
    overflow: 'hidden',
  }),
  titleContainer: {
    width: '100%',
    padding: 15,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImageContainer: (bg) => ({
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: bg,
    marginRight: 10,
    padding: 5,
  }),
  headerImage: {
    width: '100%',
    height: '100%',
  },
  headerTitle: (color) => ({
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    color: color,
  }),
  image: {
    width: '100%',
    alignSelf: 'center',
    aspectRatio: 1,
  },
  buttonLove: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    elevation: 5,
  },
  imageLove: {
    width: 20,
    height: 20,
  },
});
