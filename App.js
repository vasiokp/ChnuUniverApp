import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './src/screens/Auth/Login'
import AuthLoadingScreen from './src/screens/Auth/AuthLoading'

import ScheduleTab from './src/screens/ScheduleTab'
import ScheduleDetailsScreen from './src/screens/ScheduleTab/components/ScheduleDetails'

import SessionTab from './src/screens/SessionTab'
import CreditDetails from './src/screens/SessionTab/components/CreditDetails'
import ExamDetails from './src/screens/SessionTab/components/ExamDetails'
import RetakeDetails from './src/screens/SessionTab/components/RetakeDetails'
import StateExamDetails from './src/screens/SessionTab/components/StateExamDetails'

import NewsTab from './src/screens/NewsTab'
import NewsScreenDetails from './src/screens/NewsTab/NewsDetails'

import ProfileTab from './src/screens/ProfileTab'
import InfoTab from './src/screens/InfoTab'


import { store }  from './src/store/configureStore'
import { headerDefaultStyle } from './src/helpers/navigationHelper'
import moment from 'moment'
import 'moment/locale/uk'

moment.locale('uk')

const AuthStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
});

const ScheduleStack = createStackNavigator({
    ScheduleTab: {
      screen: ScheduleTab,
    },
    ScheduleDetailsScreen: ScheduleDetailsScreen
  },
  headerDefaultStyle
);

const NewsStack = createStackNavigator(
  {
    NewsTab: {
      screen: NewsTab,
    },
    NewsScreenDetails: {
      screen: NewsScreenDetails,
      navigationOptions: {
        title: 'Подробиці'
      }
    }
  },
  headerDefaultStyle
);

const SessionStack = createStackNavigator(
  {
    SessionTab: {
      screen: SessionTab,
    },
    CreditDetails: {
      screen: CreditDetails,
      navigationOptions: {
        title: 'Заліки'
      }
    },
    ExamDetails: {
      screen: ExamDetails,
      navigationOptions: {
        title: 'Іспити'
      }
    },
    RetakeDetails: {
      screen: RetakeDetails,
      navigationOptions: {
        title: 'Перездачі'
      }
    },
    StateExamDetails: {
      screen: StateExamDetails,
      navigationOptions: {
        title: 'Державні іспити'
      }
    }
  },
  headerDefaultStyle
);

const TabNavigator = createBottomTabNavigator(
  {
    ScheduleTab: {
      screen: ScheduleStack,
      navigationOptions: {
        title: 'Розклад',
        tabBarIcon: ({ tintColor }) => (<Icon name="list-alt" size={28} color="#000000" />)
      }
    },
    SessionTab: {
      screen: SessionStack,
      navigationOptions: {
        title: 'Сесія',
        tabBarIcon: ({ tintColor }) => (<Icon name="graduation-cap" size={28} color="#000000" />)
      }
    },
    NewsTab: {
      screen: NewsStack,
      navigationOptions: {
        title: 'Новини',
        tabBarIcon: ({ tintColor }) => (<Icon name="university" size={28} color="#000000" />)
      }
    },
    InfoTab: {
      screen: InfoTab,
      navigationOptions: {
        title: 'Довідка',
        tabBarIcon: ({ tintColor }) => (<Icon name="info" size={28} color="#000000" />)
      }
    },
    ProfileTab: {
      screen: ProfileTab,
      navigationOptions: {
        title: 'Профіль',
        tabBarIcon: ({ tintColor }) => (<Icon name="user-circle" size={28} color="#000000" />)
      }
    }
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