import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Deck extends React.Component {
  render() {
    const { navigation: { getParam } } = this.props;
    const id = getParam('deckId');

    return (
      <View>
        <Text>Deck View id:{id}</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Deck);
