import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const PlaceDetail = (props) => {
  let modalContent = null

  if (props.selectedPlace !== null) {
    modalContent = (
      <View>
        <Image
          source={props.selectedPlace.placeImage}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
      </View>
    )
  }

  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType='slide'
    >
      <View style={styles.modalContainer} >
        {modalContent}
        <View style={styles.buttons}>
          <TouchableOpacity onPress={props.closeModal} >
            <Icon name='ios-arrow-dropdown-circle' color='#56b0ff' size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.deleteSelectedPlace} >
            <Icon name='ios-trash' color='red' size={40} />
          </TouchableOpacity>
        </View>
        {/* <Button title='Delete' onPress={props.deleteSelectedPlace} color='red' /> */}
        {/* <Button title='Close' onPress={props.closeModal} /> */}
      </View>
    </Modal>
  )
}
// org.reactjs.native.example.together

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 20
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