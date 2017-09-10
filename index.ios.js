import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import SrbFront from './app/container/'
import Login from './app/container/login'

const App = StackNavigator({
  Home: {
    screen: SrbFront,
    navigationOptions: {
      header: null
    }
  },
})

AppRegistry.registerComponent('srbFront', () => App)
