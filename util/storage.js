import { AsyncStorage } from 'react-native';

const DECKS_KEY = 'DECKS_KEY';

export const getDecksFromStorage = async () => {
  try {
    const decksJSON = await AsyncStorage.getItem(DECKS_KEY);
    return JSON.parse(decksJSON);
  } catch (error) {
    console.log('Error retrieving decks from local storage', error);
    throw error;
  }
};

export const saveDecks = async (decks) => {
  try {
    return AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks));
  } catch (error) {
    console.log('Error setting new deck in local storage', error);
    throw error;
  }
};
