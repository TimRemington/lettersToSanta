import React, {Component} from 'react';
import { Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

const image = require('../../images/giftbox.png')

export default class Presents extends Component{

  state = {
    firstPresIsUW: false,
    firstUWPresent: '',
    secondPresIsUW: false,
    secondUWPresent: '',
    thirdPresIsUW: false,
    thirdUWPresent: ''
  }

  generateRandomPresent = () => {
    const randomNum = Math.floor(Math.random() * 23)
    const possiblePresents = ['🍊', '🧦', '🔥', '🕯️', '🎁', '🙊', '💔', '💅', '🏄‍♀️', '👨‍⚕️', '🐴', '🐊', '🌭', '🍷', '🌏', '⌚', '💵', '🗡', '🔫', '🏹', '🔭', '⚰', '🚴']
    console.log("randomNUM", randomNum)
    return possiblePresents[randomNum]
  }

  unwrapPresent = (id) => {
    let something = ''
    switch(id) {
      case 1:
        presentToUpdate = 'firstPresIsUW'
        something = 'firstUWPresent'
        break;
      case 2:
        presentToUpdate = 'secondPresIsUW'
        something = 'secondUWPresent'
        break;
      case 3:
        presentToUpdate = 'thirdPresIsUW'
        something = 'thirdUWPresent'
        break;
      default:
        break;
    }
    this.setState({
      ...this.state,
      [presentToUpdate]: true,
      [something]: this.generateRandomPresent()
    })
  }

  render() {
    console.log('type of this.state.firstUWPresent', typeof this.state.firstUWPresent )
    console.log(this.secondUWPresent)
    return (
      <View style={ styles.container }>

        {this.state.firstPresIsUW ?
          <Text style={{fontSize: 120}}>{this.state.firstUWPresent}</Text>
          :
        <TouchableOpacity style={styles.image} onPress={() => this.unwrapPresent(1)}>
          <Image source={ image }/>
        </TouchableOpacity> }


        {this.state.secondPresIsUW ?
          <Text style={{fontSize: 120}}>{this.state.secondUWPresent}</Text>
          :
        <TouchableOpacity style={styles.image} onPress={() => this.unwrapPresent(2)}>
          <Image source={ image }/>
        </TouchableOpacity> }


        {this.state.thirdPresIsUW ?
          <Text style={{fontSize: 120}}>{this.state.thirdUWPresent}</Text>
          :
        <TouchableOpacity style={styles.image} onPress={() => this.unwrapPresent(3)}>
          <Image source={ image }/>
        </TouchableOpacity> }

      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    padding: 10
  },

}








// Flatlist is terrible, saved here for later
{/* <FlatList
  data={ array }
  keyExtractor={ (item, index) => index.toString() }
  renderItem={ ({item}) => this.renderItem(item) }
  horizontal={false}
  numColumns={2}
  extraData={this.props}
/> */}


//renderItem
// renderItem = item => {
//   console.log("ITEM >>>>> ", item)
//   return (
//     <TouchableOpacity style={styles.image}>
//       <Image source={ image }/>
//     </TouchableOpacity>
//
//   )
// }
