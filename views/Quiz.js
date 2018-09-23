import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Quiz view!</Text>
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
  }
});

export default connect()(Quiz);
