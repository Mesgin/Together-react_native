import { Navigation } from 'react-native-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

const startMainTabs = () => {
  Promise.all([
    Icon.getImageSource('ios-search-outline', 30),
    Icon.getImageSource('ios-share-alt-outline', 30),
    Icon.getImageSource('ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'together.FindPlaceScreen',
          label: 'Find Place',
          title: 'Find Place',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                id: 'sideDrawerId'
              }
            ]
          }
        },
        {
          screen: 'together.SharePlaceScreen',
          label: 'Share Place',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                id: 'sideDrawerId'
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: 'together.SideDrawerScreen'
        }
      }
    })
  })
}
export default startMainTabs