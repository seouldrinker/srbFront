import React, { Component } from 'react'
import {
  Text,
  View,
  Image
} from 'react-native'

import styles from '../styles/common'

export default class Explore extends Component {
  static navigationOptions = {
    tabBarLabel: '탐색',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../images/common/navi_explore.png')}
        style={[styles.naviIcon, {tintColor: tintColor}]}
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    )
  }
}
