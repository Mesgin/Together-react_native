import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from '../../store/actions/index'

class SharePlaceScreen extends Component {
  addPlaceHandler = name => {
    this.props.addPlace(name)
  }
  render() {
    return (
      <View>
        <PlaceInput addPlace={this.addPlaceHandler} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    addPlace: name => dispatch(addPlace(name))
  }
)

export default connect(null, mapDispatchToProps)(SharePlaceScreen)