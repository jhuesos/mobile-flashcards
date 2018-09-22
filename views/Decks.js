import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { handleGetDecks } from '../actions';
import Deck from '../components/Deck';

class Decks extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(handleGetDecks());
  }

  render() {
    const { decks } = this.props;

    return (
      <View>
        {decks.map(deck => (<Deck key={deck.id} title={deck.title} cards={deck.cards}></Deck>))}
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Decks);
