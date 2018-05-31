import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

class PlaceInput extends Component {

  state = {
    placeName: ''
  }

  placeTextHandler = (e) => {
    this.setState({
      placeName: e
    })
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.props.addPlace(this.state.placeName)
    this.setState({
      placeName: ''
    })
  }

  render(){
    return (
      <View style={styles.inputPlace}>
        <TextInput
          style={styles.placeInput}
          onChangeText={this.placeTextHandler}
          value={this.state.placeName}
          placeholder='Serach...'
        />
        <Button
          title='add'
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    )
  }
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