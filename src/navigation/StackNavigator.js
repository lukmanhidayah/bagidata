import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

//instantiation createStackNavigator
const Stack = createStackNavigator();

const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
      {...props}>
      {props.children}
    </Stack.Navigator>
  );
};

export default StackNavigator;
