const DECKS_KEY = 'DECKS_KEY';

export const getDecksFromStorage = async () => {
  try {
    // FIXME: enable once deck creation is done
    // const decksJSON = await AsyncStorage.getItem(DECKS_KEY);
    // return JSON.parse(decksJSON);
    return Promise.resolve(mockData);
  } catch (error) {
    console.log('Error retrieving decks from local storage', error);
    throw error;
  }
}

const mockData = [
  { id: 1, title: 'deck1', cards: new Array(3) },
  { id: 2, title: 'deck2', cards: new Array(5) },
  { id: 3, title: 'deck3', cards: new Array(20) },
]
