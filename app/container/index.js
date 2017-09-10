import { TabNavigator } from 'react-navigation'

import Feed from './feed'
import Explore from './explore'
import Walk from './walk'
import Rank from './rank'

export default TabNavigator({
  '피드': {
    screen: Feed
  },
  '탐색': {
    screen: Explore
  },
  '걷기': {
    screen: Walk
  },
  '랭킹': {
    screen: Rank
  },
})
