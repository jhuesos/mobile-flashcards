import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import NewDeckScreen from './views/NewDeck';
import DecksScreen from './views/Decks';
import DeckScreen from './views/DeckDetail';
import AddCardScreen from './views/AddCard';
import QuizScreen from './views/Quiz';
import { primary } from './util/colors';

const DecksStack = createStackNavigator(
  {
    Decks: {
      screen: DecksScreen,
      navigationOptions: {
        title: 'Awesome Mobile Flashcards'
      }
    },
    DeckDetail: {
      screen: DeckScreen,
      navigationOptions: {
        title: 'Deck details'
      }
    },
    AddCard: {
      screen: AddCardScreen,
      navigationOptions: {
        title: 'Add card'
      }
    },
    Quiz: {
      screen: QuizScreen,
      navigationOptions: {
        title: 'Quiz'
      }
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: primary
      },
      headerTintColor: 'white'
    }
  });

export default createBottomTabNavigator(
  {
    Decks: {
      screen: DecksStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='cards-outline' size={30} color={tintColor} />
        ),
      }
    },
    NewDeck: {
      screen: NewDeckScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='plus' size={30} color={tintColor} />
        ),
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        backgroundColor: primary
      }
    }
  }
);
