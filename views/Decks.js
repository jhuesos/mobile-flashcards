import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { handleGetDecks } from '../actions';

class Decks extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(handleGetDecks());
  }

  openDetails = (id) => {
    const { navigation: { navigate } } = this.props;

    navigate({
      routeName: 'DeckDetail',
      params: {
        deckId: id
      }
    });
  };

  render() {
    const { decks } = this.props;

    return (
      <View>
        {Object.values(decks).map(deck => (
          <TouchableOpacity
            key={deck.id}
            style={styles.container}
            onPress={() => this.openDetails(deck.id)}
          >
            <Text>{deck.name}</Text>
            <Text>{deck.cards.length} cards</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#ccc',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
  }
});

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Decks);
