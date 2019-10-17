import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

import ScheduleTab from './src/screens/ScheduleTab'
import ProfileTab from './src/screens/ProfileTab'
import LoginScreen from './src/screens/Auth/Login'
import AuthLoadingScreen from './src/screens/Auth/AuthLoading'

import { store }  from './src/store/configureStore'

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
});
const TabNavigator = createBottomTabNavigator(
  {
    ScheduleTab: {
      screen: ScheduleTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="tasks" size={30} color="#000000" />)
      }
    },
    ProfileTab: {
      screen: ProfileTab,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name="user-circle" size={30} color="#000000" />)
      }},
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