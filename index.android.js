import React, { Component } from 'react'
import { AppRegistry, Image } from 'react-native'
import { StackNavigator } from 'react-navigation'

import SrbFront from './app/container/'
import Login from './app/container/login'

const App = StackNavigator({
  Home: {
    screen: SrbFront,
    navigationOptions: {
      headerRight: <Image source={require('./app/images/common/navi_logo.jpg')} />,
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
})

AppRegistry.registerComponent('srbFront', () => App)
