import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'DECKS_KEY';

export const getDecksFromStorage = () => {
  return AsyncStorage.getItem(DECKS_KEY).then(JSON.parse)
};

export const saveDecks = (decks) => {
  return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
};
