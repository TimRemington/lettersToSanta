import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

const image = require('../')
const array = [ image, image, image, image ]
export default class Presents extends Component{

  state = {
    firstPresIsUW: false,
    secondPresIsUW: false,
    thirdPresIsUW: false,
    fourthPresIsUW: false,
  }

  generateRandomPresent = () => {
    const possiblePresents = []
  }

  unwrapPresent = (id) => {
    let presentToUpdate = ''
    switch(id) {
      case 1:
        presentToUpdate = 'firstPresIsUW'
        break
      case 2:
        presentToUpdate = 'secondPresIsUW'
        code block
        break
      case 3:
        presentToUpdate = 'thirdPresIsUW'
        code block
        break
      case 4:
        presentToUpdate = 'fourthPresIsUW'
        code block
        break
      default:
        break
    }
    this.setState({
      ...this.state,
      [presentToUpdate]: true
    })
  }

  renderItem = item => {
    return (
      <View>
        <Image
          source={ image }
          onPress={this.unwrapPresent()}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ array }
          keyExtractor={ (item, index) => index.toString() }
          renderItem={ ({item}) => this.renderItem(item) }
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    margin: 20,
    justifyContent: 'space-between'
  }
}
