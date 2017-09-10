import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native'

import styles from '../styles/login'

export default class Login extends Component {
  constructor() {
    super()
    this.onPressLearnMore = this.onPressLearnMore.bind(this)
  }

  onPressLearnMore() {
    console.log(1)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.background}
          source={require('../images/login/background.png')} />
        <View style={styles.loginButtonList}>
          <TouchableOpacity style={styles.loginButton}
            onPress={this.onPressLearnMore}>
            <Image
              style={styles.loginButtonImage}
              source={require('../images/login/facebook.png')}
            />
            <Text>페이스북으로 시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}
            onPress={this.onPressLearnMore}>
            <Image
              style={styles.loginButtonImage}
              source={require('../images/login/google.png')}
            />
            <Text>구글 계정으로 시작하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}
            onPress={this.onPressLearnMore}>
            <Image
              style={styles.loginButtonImage}
              source={require('../images/login/kakaotalk.png')}
            />
            <Text>카카오톡으로 시작하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
