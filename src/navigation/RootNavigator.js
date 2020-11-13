import React from 'react';
//react-navigation
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//custom StackNavigator
import StackNavigator from './StackNavigator';

//Navigation Screen
import HomeNavigator from './home/HomeNavigator';
import DogNavigator from './dog/DogNavigator';
import GameNavigator from './game/GameNavigator';
import SettingNavigator from './setting/SettingNavigator';
import { useSelector } from 'react-redux';

//instantiation createStackNavigator
const Main = createStackNavigator();

const RootNavigator = () => {
  const theme = useSelector((state) => state.theme);
  const MyTheme = {
    dark: theme.isDark,
    colors: {
      ...DefaultTheme.colors,
      primary: theme.colors.primary,
      background: theme.colors.background,
      card: theme.colors.thinBackground,
      text: theme.colors.text,
      border: theme.colors.border,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <StackNavigator>
        <Main.Screen name="Home" component={HomeNavigator} />
        <Main.Screen name="Dog" component={DogNavigator} />
        <Main.Screen name="Game" component={GameNavigator} />
        <Main.Screen name="Setting" component={SettingNavigator} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
