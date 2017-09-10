import { Image } from 'react-native'

import { TabNavigator } from 'react-navigation'

import Feed from './feed'
import Explore from './explore'
import Walk from './walk'
import Rank from './rank'

export default TabNavigator({
  Feed: {
    screen: Feed
  },
  Explore: {
    screen: Explore
  },
  Walk: {
    screen: Walk
  },
  Rank: {
    screen: Rank
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#00b154',
    inactiveTintColor: '#4a4a4a',
    showIcon: true,
    tabStyle: {
      flexDirection: 'row',
    },
    labelStyle: {
      fontSize: 18,
    },
    indicatorStyle: {
      backgroundColor: '#00b154',
    },
    style: {
      backgroundColor: '#fff',
    }
  },
})
