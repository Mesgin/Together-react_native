import { createStore, combineReducers, compose } from 'redux'
import placesReducer from './reducers/placesReducer'

const rootReducer = combineReducers({
  places: placesReducer
})

let composeEnhancer = compose
if(__DEV__){
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const store = () => {
  return createStore(rootReducer,composeEnhancer())
}

export default store