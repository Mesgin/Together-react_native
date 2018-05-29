import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    placeText: ''
  }

  placeTextHandler = (e) => {
    this.setState({
      placeText: e.value
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputPlace}>
          <TextInput
            style={styles.placeInput}
            onChangeText={this.placeTextHandler}
            value={this.state.placeText}
            placeholder='Serach...'
          />
          <Button title='add' style={styles.placeButton}/>
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
