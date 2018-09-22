import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import NewDeckScreen from './views/NewDeck';
import DecksScreen from './views/Decks';
import DeckScreen from './views/DeckDetail';

const DecksStack = createStackNavigator({
  Decks: {
    screen: DecksScreen,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckDetail: {
    screen: DeckScreen,
    navigationOptions: {
      title: 'Deck details'
    }
  },
});

export default createBottomTabNavigator(
  {
    Decks: DecksStack,
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        title: 'New Deck'
      }
    },
  },
  {
    /* Other configuration remains unchanged */
  }
);
