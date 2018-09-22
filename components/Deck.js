import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Deck extends React.Component {
  render() {
    const { title, cards } = this.props;

    return (
      <TouchableOpacity style={styles.container}>
        <Text>{title}</Text>
        <Text>{cards.length} cards</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 24,
    marginBottom: 16,
  }
});

export default Deck;
