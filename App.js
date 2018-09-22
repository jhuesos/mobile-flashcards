import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Provider } from 'react-redux';

import NewDeck from './views/NewDeck';
import Decks from './views/Decks';
import store from './store';

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks
  },
  NewDeck: {
    screen: NewDeck
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <View style={{ height: Constants.statusBarHeight }}>
            <StatusBar translucent></StatusBar>
          </View>
          <Tabs></Tabs>
        </View>
      </Provider>
    );
  }
};
