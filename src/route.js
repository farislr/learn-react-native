import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation'
import BottomBar from './home/components/bottomBar'
import Login from './auth/login'
import Register from './auth/register'
import Dashboard from './home/dashboard'
import Finance from './home/finance'
import Profile from './home/profile'

const HomeTab = createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      params: { icon: { name: 'dashboard', type: 'FontAwesome' } },
    },
    Finance: {
      screen: Finance,
      params: { icon: { name: 'finance', type: 'MaterialCommunityIcons' } },
    },
    Profile: {
      screen: Profile,
      params: {
        icon: { name: 'face-profile', type: 'MaterialCommunityIcons' },
      },
    },
  },
  {
    tabBarComponent: props => {
      return <BottomBar {...props} />
    },
  }
)

const AppNav = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register },
    Home: { screen: HomeTab },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

export default createAppContainer(AppNav)
