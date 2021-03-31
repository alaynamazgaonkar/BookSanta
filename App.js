import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs'

import WelcomeScreen from './screens/WelcomeScreen';
import {AppTabNavigator} from './components/TabNavigator'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'

export default function App() {
  return (
    <AppContainer/>
  );
}
const switchNavigator = createSwitchNavigator ({
  WelcomeScreen : {screen:WelcomeScreen},
  BottomTab : {screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
