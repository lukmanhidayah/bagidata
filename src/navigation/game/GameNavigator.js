import React from 'react';

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

//custom stack navigator
import StackNavigator from '../StackNavigator';

//instantiation stack navigation
const Game = createStackNavigator();

//screen
import GameScreen from '../../screens/game/Game.screen';

//main
const GameNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Game"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Game.Screen
        name="Game"
        component={GameScreen}
        options={{
          headerShown: true,
          title: 'Games',
        }}
      />
    </StackNavigator>
  );
};

export default GameNavigator;
