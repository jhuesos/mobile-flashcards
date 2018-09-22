import { ACTION_NAMES } from '../actions';
import { combineReducers } from 'redux';

const decksReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_NAMES.DECKS_RECEIVED:
      return { ...action.decks };
    case ACTION_NAMES.CREATE_DECK:
      return {
        [action.deck.id]: action.deck,
        ...state
      };
    default:
      return [];
  }
};

export default combineReducers({
  decks: decksReducer
});
