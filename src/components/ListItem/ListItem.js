import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'

const ListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onItemPressed}>
      <View style={styles.listItem}>
        <Image source={props.placeImage} style={styles.placeImage}/>
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
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    width: 30,
    height: 30,
    marginRight: 10
  }
})

export default ListItem