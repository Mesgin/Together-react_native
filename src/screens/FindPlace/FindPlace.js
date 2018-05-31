import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PlaceList from '../../components/PlaceList/PlaceList'

class FindPlaceScreen extends Component {
  selectPlaceHandler = key => {

    const selectedPlace = this.props.places.find(place => {
      return place.key === key
    })

    this.props.navigator.push({
      screen: 'together.PlaceDetailScreen',
      title: selectedPlace.name,
      passProps: {
        selectedPlace
      }
    })
  }
  render() {
    return (
      <View>
        <PlaceList places={this.props.places} selectPlace={this.selectPlaceHandler} />
      </View>
    )
  }
}

const mapStateToProps = state => (
  {
    places: state.places.places
  }
)

export default connect(mapStateToProps)(FindPlaceScreen)