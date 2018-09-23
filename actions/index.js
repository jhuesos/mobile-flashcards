import { getDecksFromStorage, addNewDeck, saveDecks } from '../util/storage';
import uuidv1 from 'uuid/v1';

export const ACTION_NAMES = {
  DECKS_RECEIVED: 'DECKS_RECEIVED',
  CREATE_DECK: 'CREATE_DECK',
  ADD_QUESTION: 'ADD_QUESTION',
};

const decksReceived = (decks) => ({
  type: ACTION_NAMES.DECKS_RECEIVED,
  decks
});

const deckCreated = (deck) => ({
  type: ACTION_NAMES.CREATE_DECK,
  deck
});

const questionCreated = ({ deckId, card }) => ({
  type: ACTION_NAMES.ADD_QUESTION,
  deckId,
  card,
});

export const handleGetDecks = () => (dispatch) => {
  getDecksFromStorage()
    .then((decks) => { console.log(decks); dispatch(decksReceived(decks)) });
};

export const handleCreateDeck = ({ name }) => (dispatch, getState) => {
  const newDeck = {
    id: uuidv1(),
    name,
    cards: [],
  };

  dispatch(deckCreated(newDeck));

  saveDecks(getState().decks);

  return Promise.resolve(newDeck);
};

export const handleAddCard = ({ deckId, question, answer }) => (dispatch, getState) => {
  const card = {
    id: uuidv1(),
    question,
    answer,
  };

  dispatch(questionCreated({ deckId, card }));

  saveDecks(getState().decks);

  return Promise.resolve(card);
};
