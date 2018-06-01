import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default HeadingText = (props) => {
  return (
    <Text
      {...props}
      style={[styles.text, props.style]}
    >
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'HelveticaNeue-UltraLight',
    fontSize: 40
  }
})