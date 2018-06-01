import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE
} from '../actions/actionTypes'

const initialState = {
  places: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: String(Math.random()),
          name: action.payload,
          placeImage: {
            uri: 'https://static.independent.co.uk/s3fs-public/styles/story_large/public/thumbnails/image/2014/03/26/19/web-tehran-getty-cv3-DONTUSEAGAIN.jpg'
          }
        })
      }
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.payload
        })
      }
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place) => {
          return place.key === action.payload
        })
      }
    default:
      return state
  }
}

export default reducer