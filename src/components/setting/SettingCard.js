import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import CustomButton from '../commons/CustomButton';

const SettingCard = ({ onPress, source, titleText, descText, theme }) => {
  return (
    <CustomButton
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.thinBackground,
        },
      ]}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <FastImage
            source={source}
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.colors.primary }]}>
            {titleText}
          </Text>
          <Text style={[styles.description, { color: theme.colors.primary }]}>
            {descText}
          </Text>
        </View>
      </View>
    </CustomButton>
  );
};

export default SettingCard;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 90,
    elevation: 2,
  },
  content: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    padding: 5,
    width: '20%',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  textContainer: {
    padding: 5,
    width: '80%',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
  },
});
