import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default class SantaLetter extends Component {
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
