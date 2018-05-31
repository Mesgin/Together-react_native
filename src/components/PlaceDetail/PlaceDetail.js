import React from 'react'
import { StyleSheet, Text, View, Modal, Image, Button } from 'react-native'

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
        <Button title='Delete' onPress={props.deleteSelectedPlace} color='red' />
        <Button title='Close' onPress={props.closeModal} />
      </View>
    </Modal>
  )
}
// org.reactjs.native.example.together

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 25
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
  }
})

export default PlaceDetail