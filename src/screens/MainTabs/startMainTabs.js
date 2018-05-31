import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-search-outline', 30),
    Icon.getImageSource('ios-share-alt-outline', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'together.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0]
        },
        {
          screen: 'together.SharePlaceScreen',
          label: 'Share Place',
          title: 'Share Place',
          icon: sources[1]
        }
      ]
    })
  })
}
export default startMainTabs