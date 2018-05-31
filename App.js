import { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'

Navigation.registerComponent('together.AuthScreen', () => AuthScreen )
Navigation.registerComponent('together.FindPlaceScreen', () => FindPlaceScreen )
Navigation.registerComponent('together.SharePlaceScreen', () => SharePlaceScreen )

Navigation.startSingleScreenApp({
  screen: {
    screen: 'together.AuthScreen',
    title: 'Login'
  }
})