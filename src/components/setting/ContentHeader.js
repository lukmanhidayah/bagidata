import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';
import LocalImage from '../../assets/images/LocalImage';
import Dot from '../commons/Dot';

const ContentHeader = ({
  styleLight,
  styleDark,
  styleTextLightContainer,
  styleTextDarkContainer,
  onPressLight,
  onPressDark,
}) => {
  const theme = useSelector((state) => state.theme);
  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: theme.isDark ? '#0e0e0e' : '#EEE' },
      ]}>
      <Dot />
      <View style={styles.headerContent}>
        <View style={styles.headerChild}>
          <TouchableWithoutFeedback onPress={onPressLight}>
            <View>
              <Animated.View
                style={[
                  styles.imageContainer,
                  { borderColor: theme.colors.primary },
                  styleLight,
                ]}>
                <FastImage
                  source={LocalImage.lightMode}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </Animated.View>
              <Animated.View
                style={[
                  styles.buttonContainer,
                  {
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.isDark
                      ? '#0e0e0e'
                      : theme.colors.primary,
                  },
                  styleTextLightContainer,
                ]}>
                <Text
                  style={[
                    styles.buttonText,
                    { color: theme.isDark ? theme.colors.primary : '#FFF' },
                  ]}>
                  Light Mode
                </Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.headerChild}>
          <TouchableWithoutFeedback onPress={onPressDark}>
            <View>
              <Animated.View
                style={[
                  styles.imageContainer,
                  { borderColor: theme.colors.primary },
                  styleDark,
                ]}>
                <FastImage
                  source={LocalImage.darkMode}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.stretch}
                />
              </Animated.View>
              <Animated.View
                style={[
                  styles.buttonContainer,
                  {
                    borderColor: theme.colors.primary,
                    backgroundColor: theme.isDark ? theme.colors.primary : '#EEE',
                  },
                  styleTextDarkContainer,
                ]}>
                <Text
                  style={[
                    styles.buttonText,
                    { color: theme.isDark ? '#0e0e0e' : theme.colors.primary },
                  ]}>
                  Dark Mode
                </Text>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default ContentHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 300,
  },
  headerContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerChild: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 80,
    aspectRatio: 0.55,
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fdf4f0',
    fontFamily: 'OpenSans-Bold',
  },
});
