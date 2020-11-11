import React from 'react';

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

//custom stack navigator
import StackNavigator from '../StackNavigator';

//instantiation stack navigation
const Dog = createStackNavigator();

//screen
import DogScreen from '../../screens/dog/Dog.screen';

//main
const DogNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Dog"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Dog.Screen
        name="Dog"
        component={DogScreen}
        options={{
          headerShown: true,
          title: "Dogs"
        }}
      />
    </StackNavigator>
  );
};

export default DogNavigator;
