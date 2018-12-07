import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView, Image, Dimensions} from 'react-native';
import SantaLetter from './components/santa-letter/santa-letter.js'
import Presents from './components/presents/presents.js'

export default class App extends Component{

  state = {
    letter: 'Input presents here',
    isSentToSanta: false,
  }

  sendToSanta = (letter) => {
    this.setState({
      letter: letter,
      isSentToSanta: true
    })
  }
  render() {
    console.log(this.state)
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.welcome}>Dear Santa,</Text>
          <SantaLetter letter={this.state.letter} sendToSanta = {this.sendToSanta}/>
        </View>
        <View>
          {this.state.isSentToSanta ? <Presents/> : <Image style={styles.image} source={require('./images/tree.jpg')}/>}
        </View>
      </View>
    );
  }
}

// Styling for the height
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    width: '100%',
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#63EC7F',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    paddingTop: 20,
    height: height * 0.6,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  }


});
