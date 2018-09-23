import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { primary } from '../util/colors';

export default ({
  text,
  isQuestion,
  handleCardPress,
  handleRememberPress,
  handleDontRememberPress }) => (
    <View style={styles.container}>
      <TouchableNativeFeedback onPress={handleCardPress}>
        <View style={styles.card}>
          <Text>{isQuestion ? 'Question:' : 'Answer:'}</Text>
          <Text style={styles.title}>{text}</Text>
          <Text style={styles.hint}>(click in the card to toggle between question and answer)</Text>
        </View>
      </TouchableNativeFeedback>

      <View style={styles.buttonContainer}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={handleRememberPress}
        >
          <View>
            <Text style={styles.buttonPrimary}>I remember </Text>
          </View>
        </TouchableNativeFeedback>


        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={handleDontRememberPress}
        >
          <View>
            <Text style={styles.buttonSecondary}>I don't remember </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View >
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    marginTop: 16,
    marginHorizontal: 48,
    padding: 16,
  },
  buttonContainer: {
    paddingTop: 0,
    marginVertical: 48,
  },
  title: {
    flex: 1,
    fontSize: 40,
  },
  hint: {
    color: '#999'
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
