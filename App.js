import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from "./src/store/actions/index"

class App extends React.Component {

  addPlace = (placeName) => {
    this.props.onAddPlace(placeName)
  }

  closeModal = () => {
    this.props.onDeselectPlace()
  }

  deleteSelectedPlace = () => {
    this.props.onDeletePlace()
  }

  selectPlace = (key) => {
    this.props.onSelectPlace(key)
  }


  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          closeModal={this.closeModal}
          deleteSelectedPlace={this.deleteSelectedPlace}
        />
        <PlaceInput
          addPlace={this.addPlace}
        />
        <PlaceList
          places={this.props.places}
          selectPlace={this.selectPlace}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})


const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

const mapStateToProps = state => (
  {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App)