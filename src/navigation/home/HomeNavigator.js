import React from 'react';

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

//custom stack navigator
import StackNavigator from '../StackNavigator';

//instantiation stack navigation
const Home = createStackNavigator();

//screen
import HomeScreen from '../../screens/home/Home.screen';

//main
const HomeNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Home.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator>
  );
};

export default HomeNavigator;
