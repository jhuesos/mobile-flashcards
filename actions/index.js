import { getDecksFromStorage } from '../util/storage';

export const ACTION_NAMES = {
  DECKS_RECEIVED: 'DECKS_RECEIVED',
};

const decksReceived = (decks) => ({
  type: ACTION_NAMES.DECKS_RECEIVED,
  decks
});

export const handleGetDecks = () => (dispatch) => {
  getDecksFromStorage().then((decks) => { dispatch(decksReceived(decks)) });
};
