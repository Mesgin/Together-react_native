import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native'
import { connect } from 'react-redux'
import PlaceInput from '../../components/PlaceInput/PlaceInput'
import { addPlace } from '../../store/actions/index'
import ButtonBG from '../../components/UI/ButtonBG/ButtonBG'
import HeadingText from '../../components/UI/HeadingText/HeadingText'

import bg from '../../assets/img/beach.jpg'

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props)

    this.props.navigator.setOnNavigatorEvent(this.sideDrawerEvent)
  }

  static navigatorStyle = {
    navBarBackgroundColor: '#329ca8',
    navBarButtonColor: 'white'
  }

  state = {
    placeName: ''
  }

  onChangeText = val => {
    this.setState({
      placeName: val
    })
  }

  sideDrawerEvent = event => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'sideDrawerId') {
        this.props.navigator.toggleDrawer({
          side: 'left'
        })
      }
    }
  }

  addPlaceHandler = () => {
    if (this.state.placeName.trim() !== '') {
      this.props.addPlace(this.state.placeName)
      this.setState({
        placeName: ''
      })
    }
  }

  render() {
    console.log(this.state.placeName)
    return (
      <ImageBackground source={bg} style={styles.background} >
        <View style={styles.container} >
          <HeadingText>Add a Place</HeadingText>
          <View style={styles.inputContainer}>
            <PlaceInput placeName={this.state.placeName} onChangeText={this.onChangeText} />
            <ButtonBG color='#f26d00' onPress={this.addPlaceHandler} >Add</ButtonBG>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  heading: {
    marginBottom: 50
  }
})

const mapDispatchToProps = dispatch => (
  {
    addPlace: name => dispatch(addPlace(name))
  }
)

export default connect(null, mapDispatchToProps)(SharePlaceScreen)