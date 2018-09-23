import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';

import { handleAddCard } from '../actions/index';
import { primary } from '../util/colors';

class AddCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  handleSubmit = () => {
    const { dispatch, navigation: { goBack }, deck: { id: deckId } } = this.props;
    const { question, answer } = this.state;

    dispatch(handleAddCard({ deckId, question, answer }));

    goBack();

    this.setState({ question: '', answer: '' });
  }

  render() {
    const isFormInvalid = this.state.question.trim() === '' && this.state.answer.trim() === '';

    return (
      <View style={styles.container}>
        <TextInput
          placeholder='Question?'
          style={styles.input}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.question}
        ></TextInput>

        <TextInput
          placeholder='Answer'
          style={styles.input}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
        ></TextInput>

        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handleSubmit}
          disabled={isFormInvalid}
        >
          <View>
            <Text style={[styles.button, isFormInvalid && styles.disabled]}>Submit</Text>
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
  },
  disabled: {
    opacity: 0.3,
  }
});

const mapStateToProps = ({ decks }, { navigation: { getParam } }) => ({
  deck: decks[getParam('deckId')]
});

export default connect(mapStateToProps)(AddCard);
