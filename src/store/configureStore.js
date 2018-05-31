import { createStore, combineReducers } from 'redux'
import placesReducer from './reducers/placesReducer'

const rootReducer = combineReducers({
  places: placesReducer
})

const initialState = {}

const store = () => {
  return createStore(rootReducer)
}

export default store