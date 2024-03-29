import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE
} from './actionTypes'

export const addPlace = (placeName) => {
  return {
    type: ADD_PLACE,
    payload: placeName
  }
}

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    payload: key
  }
}

export const selectPlace = (key) => {
  return {
    type: SELECT_PLACE,
    payload: key
  }
}