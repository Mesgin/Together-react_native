import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
    </TouchableOpacity>
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