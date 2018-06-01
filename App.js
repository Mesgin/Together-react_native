import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail'
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer'
import configureStore from './src/store/configureStore'

const store = configureStore()

Navigation.registerComponent('together.AuthScreen', () => AuthScreen, store, Provider)
Navigation.registerComponent('together.FindPlaceScreen', () => FindPlaceScreen, store, Provider)
Navigation.registerComponent('together.SharePlaceScreen', () => SharePlaceScreen, store, Provider)
Navigation.registerComponent('together.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider)
Navigation.registerComponent('together.SideDrawerScreen', () => SideDrawerScreen)

Navigation.startSingleScreenApp({
  screen: {
    screen: 'together.AuthScreen',
    title: 'Sign Up'
  }
})