import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import { handleCreateDeck } from '../actions/index';
import { primary } from '../util/colors';

class NewDecks extends React.Component {
  state = {
    name: ''
  }

  handleSubmit = () => {
    const { dispatch, navigation: { navigate } } = this.props;
    const { name } = this.state;

    dispatch(handleCreateDeck({ name })).then(({ id }) => {
      navigate({
        routeName: 'Decks',
        action: NavigationActions.navigate({ routeName: 'DeckDetail', params: { deckId: id } }),
      });
    });

    this.setState({ name: '' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What's the title of your new deck?</Text>

        <TextInput
          placeholder='Type name of the deck'
          style={styles.input}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
        ></TextInput>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handleSubmit}
          disabled={this.state.name.trim() === ''}
        >
          <View>
            <Text style={styles.button}>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 48,
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
    marginVertical: 24,
  },
  input: {
    height: 56,
    width: '100%',
    fontSize: 24,
  },
  button: {
    color: 'white',
    fontSize: 18,
    marginVertical: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: primary
  }
});

export default connect()(NewDecks);
