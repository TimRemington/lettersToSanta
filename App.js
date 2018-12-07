import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SantaLetter from './components/santa-letter/santa-letter.js'

type Props = {};
export default class App extends Component<Props> {

  state =

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Dear Santa</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DE2B2B',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
