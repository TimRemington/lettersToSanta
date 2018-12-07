import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

const image = require('../../images/giftbox.png')
const array = [ image, image, image, image ]

export default class Presents extends Component{
  renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.image}
        onPress=
      >
        <Image
          source={ image }
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList
          data={ array }
          keyExtractor={ (item, index) => index.toString() }
          renderItem={ ({item}) => this.renderItem(item) }
          horizontal={false}
          numColumns={2}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    padding: 10
  }
}
