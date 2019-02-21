import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './auth/login'
import Register from './auth/register'

const AppNav = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default createAppContainer(AppNav)
