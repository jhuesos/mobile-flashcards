import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Card from '../components/Card';

class Quiz extends React.Component {
  state = {
    currentCardIndex: 0,
    numberOfCards: this.props.deck.cards.length,
    currentCard: this.props.deck.cards[0],
    showQuestion: true,
    questionsRemembered: 0,
    questionsDontRemembered: 0,
  }

  handleCardPress = () => {
    this.setState((prevState) => ({
      ...prevState,
      showQuestion: !prevState.showQuestion,
    }));
  }

  handleAnswerPress = (answerProperty) => {
    const { deck } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      currentCardIndex: prevState.currentCardIndex + 1,
      [answerProperty]: prevState[answerProperty] + 1,
      currentCard: deck.cards[prevState.currentCardIndex + 1],
      showQuestion: true,
    }));
  }

  render() {
    const { currentCardIndex, numberOfCards, showQuestion, currentCard } = this.state;
    const quizFinished = currentCardIndex === numberOfCards;
    const { questionsRemembered, questionsDontRemembered } = this.state;
    const percentageOfRemembered = Number.parseFloat(questionsRemembered * 100 / numberOfCards).toFixed(0);

    return (
      <View style={styles.container}>
        {!quizFinished && <Text style={{ flex: 0 }}>{currentCardIndex + 1} / {numberOfCards}</Text>}

        {!quizFinished
          ? (
            <Card
              style={{ flex: 1 }}
              isQuestion={showQuestion}
              text={showQuestion ? currentCard.question : currentCard.answer}
              handleCardPress={this.handleCardPress}
              handleRememberPress={this.handleAnswerPress.bind(this, 'questionsRemembered')}
              handleDontRememberPress={this.handleAnswerPress.bind(this, 'questionsDontRemembered')}
            ></Card>
          )
          : (
            <View style={styles.resultContainer}>
              <Text style={styles.resultText}>Nicely done :)</Text>
              <Text style={styles.resultText}>You remember {percentageOfRemembered}%</Text>
            </View>
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  resultContainer: {
    flex: 1,
    padding: 24,
  },
  resultText: {
    fontSize: 24,
  }
});

const mapStateToProps = ({ decks }, { navigation: { getParam } }) => ({
  deck: decks[getParam('deckId')]
});

export default connect(mapStateToProps)(Quiz);
