import { getDecksFromStorage, addNewDeck } from '../util/storage';
import uuidv1 from 'uuid/v1';

export const ACTION_NAMES = {
  DECKS_RECEIVED: 'DECKS_RECEIVED',
  CREATE_DECK: 'CREATE_DECK',
};

const decksReceived = (decks) => ({
  type: ACTION_NAMES.DECKS_RECEIVED,
  decks
});

const deckCreated = (deck) => ({
  type: ACTION_NAMES.CREATE_DECK,
  deck
});

export const handleGetDecks = () => (dispatch) => {
  getDecksFromStorage()
  .then((decks) => { console.log(decks); dispatch(decksReceived(decks)) });
};

export const handleCreateDeck = ({ name }) => (dispatch) => {
  const newDeck = {
    id: uuidv1(),
    name,
    cards: [],
  };

  addNewDeck(newDeck);
  dispatch(deckCreated(newDeck));
};
