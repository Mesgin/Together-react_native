import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'white',
    backgroundColor: '#eee'
  }
})

export default ListItem