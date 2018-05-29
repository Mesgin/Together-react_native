import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import ListItem from './src/components/ListItem/ListItem'
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList'

export default class App extends React.Component {
  state = {
    placeName: '',
    places: []
  }

  placeTextHandler = (e) => {
    this.setState({
      placeName: e
    })
  }

  addPlace = () => {
    if (this.state.placeName.trim() === '') {
      return
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput 
          placeName={this.state.placeName}
          placeTextHandler={this.placeTextHandler}
          addPlace={this.addPlace}
        />
        <PlaceList places={this.state.places}/>
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
