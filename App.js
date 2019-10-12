import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider } from 'react-redux'


import ScheduleTab from './src/screens/ScheduleTab'
import ProfileTab from './src/screens/ProfileTab'
import LoginScreen from './src/screens/Auth/Login'
import AuthLoadingScreen from './src/screens/Auth/AuthLoading'

import configureStore from './src/store/configureStore'
const store = configureStore()

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
});
const TabNavigator = createBottomTabNavigator(
  {
    ScheduleTab: {screen: ScheduleTab},
    ProfileTab: {screen: ProfileTab},
  },
  {
    initialRouteName: 'ScheduleTab',
  });

const AppContainer = createAppContainer(
    createSwitchNavigator(
      {
        AuthLoading: AuthLoadingScreen,
        App: TabNavigator,
        Auth: AuthStack,
      },
      {
        initialRouteName: 'AuthLoading',
      }
    )
  );

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}