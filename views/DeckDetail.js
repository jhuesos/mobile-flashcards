import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { connect } from 'react-redux';
import { primary } from '../util/colors';

class Deck extends React.Component {
  handleNavigation = (routeName) => {
    const { navigation: { navigate }, deck: { id } } = this.props;

    navigate({ routeName: routeName, params: { deckId: id } });
  }

  render() {
    const { name, cards } = this.props.deck;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{cards.length} cards</Text>

        <View style={styles.buttonContainer}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => this.handleNavigation('AddCard')}
          >
            <View>
              <Text style={styles.buttonSecondary}>Add Card</Text>
            </View>
          </TouchableNativeFeedback>


          <TouchableNativeFeedback
            background={TouchableNativeFeedback.SelectableBackground()}
            onPress={() => this.handleNavigation('Quiz')}
          >
            <View>
              <Text style={styles.buttonPrimary}>Start Quiz</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }, { navigation: { getParam } }) => ({
  deck: decks[getParam('deckId')]
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 48,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 48
  },
  title: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 32,
    marginVertical: 8,
    color: '#999',
  },
  input: {
    height: 56,
    width: '100%',
    fontSize: 24,
  },
  buttonPrimary: {
    color: 'white',
    fontSize: 18,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: primary
  },

  buttonSecondary: {
    color: primary,
    fontSize: 18,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps)(Deck);
