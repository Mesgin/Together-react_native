import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import ButtonBG from '../../components/UI/ButtonBG/ButtonBG'

import bg from '../../assets/img/beach.jpg'

class AuthScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  loginHandler = () => {
    startMainTabs()
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.background} >
      <View style={styles.container} >
        <HeadingText style={styles.heading} >Sign Up</HeadingText>
        <ButtonBG onPress={this.loginHandler} style={styles.button} color='#329ca8' >Already a Member</ButtonBG> 
        <View style={styles.inputContainer} >
          <DefaultInput placeholder='E-Mail Address' placeholderTextColor='white' style={styles.input} />
          <DefaultInput placeholder='Password' placeholderTextColor='white' style={styles.input} />
          <DefaultInput placeholder='Confirm Password' placeholderTextColor='white' style={styles.input} />
        </View>
          <ButtonBG onPress={this.loginHandler} style={styles.button} color='#f26d00' >Sign Up</ButtonBG> 
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1
  },
  inputContainer: {
    width: '70%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    borderRadius: 50,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
  },
  input: {
    borderColor: '#bbb',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  heading: {
    color: 'white',
    marginBottom: 50
  }
})

export default AuthScreen