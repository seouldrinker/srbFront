import React, { Component } from 'react'
import { AppRegistry, Image, TouchableOpacity } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

import SrbFront from './app/container/'
import Login from './app/container/login'

const App = StackNavigator({
  Home: {
    screen: SrbFront,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerLeft: <Image
        source={require('./app/images/common/navi_logo.jpg')}
        style={{marginLeft: 20}}/>,
      headerRight: (
        <TouchableOpacity onPress={() => navigation.dispatch(NavigationActions.navigate({
          routeName: 'Login',
        }))}>
          <Image style={{marginRight: 25}}
            source={require('./app/images/common/navi_person.png')}/>
        </TouchableOpacity>
      ),
    })
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
})

AppRegistry.registerComponent('srbFront', () => App)
