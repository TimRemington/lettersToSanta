import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SantaLetter from './components/santa-letter/santa-letter.js'

type Props = {};
export default class App extends Component<Props> {

  state = {
    letter: 'Input presents here',
    isSentToSanta: false,
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Dear Santa</Text>
          <SantaLetter letter={this.state.letter} />


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
    backgroundColor: '#F89696',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
