import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ListItem from '../ListItem/ListItem'

const PlaceList = (props) => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          placeName={info.item.name}
          selectPlace={() => props.selectPlace(info.item.key)}
          placeImage={info.item.placeImage}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginTop: 10
  }
})

export default PlaceList