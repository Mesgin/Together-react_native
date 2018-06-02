import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import startMainTabs from '../MainTabs/startMainTabs'
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput'
import HeadingText from '../../components/UI/HeadingText/HeadingText'
import ButtonBG from '../../components/UI/ButtonBG/ButtonBG'

import bg from '../../assets/img/beach.jpg'

class AuthScreen extends Component {
  static navigatorStyle = {
    navBarHidden: true
  }

  constructor(props){
    super(props)

    Dimensions.addEventListener('change', this.viewModeListener)    
  }

  state = {
    viewMode: Dimensions.get('window').height > 500 ? 'portrait' : 'landscape'
  }

  viewModeListener = (dims) => {
      this.setState({
        viewMode: dims.window.height > 500 ? 'portrait' : 'landscape'
      })
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.viewModeListener)
  }

  loginHandler = () => {
    startMainTabs()
  }

  render() {
    return (
      <ImageBackground source={bg} style={styles.background} >
        <View style={styles.container} >
          <HeadingText
            style={this.state.viewMode === 'portrait' ? styles.portraitHeading : styles.landscapeHeading} >
            Sign Up
          </HeadingText>
          <ButtonBG onPress={this.loginHandler} style={styles.button} color='#329ca8' >Already a Member</ButtonBG>
          <View style={styles.inputContainer} >
            <DefaultInput placeholder='E-Mail Address' placeholderTextColor='white' />
            <DefaultInput placeholder='Password' placeholderTextColor='white' />
            <DefaultInput placeholder='Confirm Password' placeholderTextColor='white' />
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
  portraitHeading: {
    color: 'white',
    marginBottom: 50
  },
  landscapeHeading: {
    color: 'white',
    marginBottom: 10
  },
})

export default AuthScreen