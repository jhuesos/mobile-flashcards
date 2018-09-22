import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { handleCreateDeck } from '../actions/index';

class NewDecks extends React.Component {
  state = {
    name: ''
  }

  _handleSubmit = () => {
    const { dispatch } = this.props;

    dispatch(handleCreateDeck({ name: this.state.name }));

    this.setState({name: ''});
    this.props.navigation.navigate('Decks');
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

        <Text>{this.state.name}</Text>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          style={styles.button}
          onPress={this._handleSubmit}
          disabled={this.state.name.trim() === ''}
        >
          <View>
            <Text>Submit</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 48,
    alignItems: 'center',

  },
  title: {
    fontSize: 40,
  },
  input: {
    height: 50,
    width: '100%'
  },
  button: {
    padding: '8 16',
  }
});

export default connect()(NewDecks);
