import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Deck extends React.Component {

  render() {
    return (
      <View>
        <Text>Deck View</Text>
      </View>
    );
  }
}

const mapStateToProps = ({ decks }) => ({
  decks
});

export default connect(mapStateToProps)(Deck);
