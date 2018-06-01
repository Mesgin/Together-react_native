import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

export default DefaultInput = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} >
      <View style={[styles.button, props.style, { backgroundColor: props.color }]}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5
  },
  text: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'HelveticaNeue-Light',
  }
})