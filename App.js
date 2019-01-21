import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigations from './src/Navigations'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'

// continuar  https://www.udemy.com/react-native-advanced/learn/v4/t/lecture/6853674?start=510

const store = createStore(reducer, middleware)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigations />
        </View>    
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
