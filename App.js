import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navigations from './src/Navigations'

// continuar  https://www.udemy.com/react-native-advanced/learn/v4/t/lecture/6853674?start=510

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigations />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
