import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default DefaultInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      underlineColorAndroid='transparent'
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    // borderWidth: 1,
    // borderColor: '#eee',
    // borderRadius: 20,
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: 'HelveticaNeue-Light',
    borderColor: '#bbb',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  }
})