import React, { Component } from 'react'
import DefaultInput from '../UI/DefaultInput/DefaultInput';

const PlaceInput = props => (
  <DefaultInput
    placeHolder='Place Name'
    value={props.placeName}
    onChangeText={props.onChangeText}
    placeholder='Place Name'
    placeholderTextColor='white'
    style={{ width: '50%' }}
  />
)

export default PlaceInput