import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

const image = require('../')
const array = [ image, image, image, image ]
export default class Presents extends Component{
  renderItem = item => {
    return (
      <View>
        <Image
          source={ image }

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
