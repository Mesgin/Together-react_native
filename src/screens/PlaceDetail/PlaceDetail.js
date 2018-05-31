import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetail = (props) => {

  return (
      <View style={styles.container} >
        <Image
          source={props.selectedPlace.placeImage}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={props.deleteSelectedPlace} >
            <Icon name='ios-trash' color='red' size={40} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeName: {
    fontWeight: 'bold',
    padding: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0

  }
})

export default PlaceDetail