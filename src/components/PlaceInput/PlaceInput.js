import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

const PlaceInput = (props) => {
  return (
    <View style={styles.inputPlace}>
      <TextInput
        style={styles.placeInput}
        onChangeText={props.placeTextHandler}
        value={props.placeName}
        placeholder='Serach...'
      />
      <Button
        title='add'
        style={styles.placeButton}
        onPress={props.addPlace}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputPlace: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%',
    height: 40,
    padding: 10,
    borderColor: '#d7d9dd',
    borderWidth: 2,
    borderRadius: 5
  },
  placeButton: {
    width: '30%'
  }
})

export default PlaceInput