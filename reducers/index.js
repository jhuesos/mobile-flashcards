import { ACTION_NAMES } from '../actions';
import { combineReducers } from 'redux';

const decksReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_NAMES.DECKS_RECEIVED:
      return { ...action.decks };
    case ACTION_NAMES.CREATE_DECK:
      return {
        ...state,
        [action.deck.id]: action.deck,
      };
    case ACTION_NAMES.ADD_QUESTION:
      const { deckId, card } = action;

      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: [card, ...state[deckId].cards]
        }
      };
    default:
      return [];
  }
};

export default combineReducers({
  decks: decksReducer
});
