import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
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
      <FlatList
        data={Object.values(decks)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => this.openDetails(item.id)}
          >
            <Text>{item.name}</Text>
            <Text>{item.cards.length} cards</Text>
          </TouchableOpacity>
        )}
      >
      </FlatList>
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
