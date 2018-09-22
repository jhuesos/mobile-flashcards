import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Constants } from 'expo';
import { Provider } from 'react-redux';

import Navigation from './navigation';
import store from './store';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation style={styles.navigation}></Navigation>
        </View>
      </Provider>
    );
  }
};
