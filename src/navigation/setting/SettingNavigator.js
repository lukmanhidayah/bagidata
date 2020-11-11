import React from 'react';

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

//custom stack navigator
import StackNavigator from '../StackNavigator';

//instantiation stack navigation
const Setting = createStackNavigator();

//screen
import SettingScreen from '../../screens/setting/Setting.screen';

//main
const SettingNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Setting"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}>
      <Setting.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          headerShown: true,
          title: "Settings"
        }}
      />
    </StackNavigator>
  );
};

export default SettingNavigator;
