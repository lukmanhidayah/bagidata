import React from 'react';
//react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//custom StackNavigator
import StackNavigator from './StackNavigator';

//Navigation Screen
import HomeNavigator from './home/HomeNavigator';
import DogNavigator from './dog/DogNavigator';
import GameNavigator from './game/GameNavigator';
import SettingNavigator from './setting/SettingNavigator';

//instantiation createStackNavigator
const Main = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
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
