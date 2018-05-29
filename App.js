import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
    const placesOutput = this.state.places.map((place,i)=>{
      return <Text key={i}> {place} </Text>
    })
    return (
      <View style={styles.container}>
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
            onPress={this.addPlace}
          />
        </View>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
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
});
