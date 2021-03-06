import React, { useRef, useCallback } from 'react';
import { StyleSheet, Animated, View, Text } from 'react-native';

//component
import LocalImage from '../../assets/images/LocalImage';
import Container from '../../components/commons/Container';
import SettingHeader from '../../components/setting/SettingHeader';
import SettingCard from '../../components/setting/SettingCard';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, resetTheme } from '../../redux/actions/themeAction';
import { resetDog } from '../../redux/actions/dogAction';
import { resetLike } from '../../redux/actions/likeAction';

const Setting = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const scaleDark = useRef(new Animated.Value(theme.scaleDark)).current;
  const scaleLight = useRef(new Animated.Value(theme.scaleLight)).current;
  const onPressDark = useCallback(() => {
    dispatch(changeTheme(true));
    Animated.parallel([
      Animated.spring(scaleDark, {
        toValue: 1.3,
        friction: 3,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleLight, {
        toValue: 1,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const onPressLight = useCallback(() => {
    dispatch(changeTheme(false));
    lightThemeAnimation();
  }, []);

  const lightThemeAnimation = () => {
    Animated.parallel([
      Animated.spring(scaleLight, {
        toValue: 1.3,
        friction: 3,
        tension: 80,
        useNativeDriver: true,
      }),
      Animated.spring(scaleDark, {
        toValue: 1,
        tension: 80,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const onResetPress = () => {
    if (theme.isDark) {
      lightThemeAnimation();
    }
    dispatch(resetDog());
    dispatch(resetLike());
    dispatch(resetTheme());
  };

  return (
    <Container>
      <SettingHeader
        onPressDark={onPressDark}
        onPressLight={onPressLight}
        styleDark={{ transform: [{ scale: scaleDark }] }}
        styleTextDarkContainer={{ transform: [{ scale: scaleDark }] }}
        styleLight={{ transform: [{ scale: scaleLight }] }}
        styleTextLightContainer={{ transform: [{ scale: scaleLight }] }}
      />
      <View style={{ padding: 20 }}>
        <SettingCard
          onPress={onResetPress}
          theme={theme}
          source={LocalImage.profile}
          titleText={'Reset'}
          descText={'Clear all data and back to default setting'}
        />
      </View>
    </Container>
  );
};

export const screenOptions = () => {
  const theme = useSelector((state) => state.theme);
  return {
    headerShown: true,
    headerTitle: 'Setting',
    headerStyle: {
      backgroundColor: theme.colors.thinBackground,
    },
    headerTitleStyle: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerTintColor: theme.colors.primary,
  };
};

export default Setting;

const styles = StyleSheet.create({});
