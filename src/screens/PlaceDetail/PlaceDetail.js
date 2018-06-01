import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Modal, Image, Button, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends Component {
  deletePlaceHandler = () => {
    this.props.deletePlace(this.props.selectedPlace.key)
    this.props.navigator.pop()
  }
  render() {
    return (
      <View style={styles.container} >
        <Image
          source={this.props.selectedPlace.placeImage}
          style={styles.placeImage}
        />
        <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={this.deletePlaceHandler} >
            <Icon name='ios-trash' color='tomato' size={40} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
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

const mapDispatchToProps = dispatch => (
  {
    deletePlace: key => dispatch(deletePlace(key))
  }
)

export default connect(null, mapDispatchToProps)(PlaceDetail)