import React, {Component} from 'react'
import {Image, TouchableOpacity} from 'react-native'

const image = require('../../images/giftbox.png')

export default class UnWrappedPresent extends Component{

  render() {
    return (
      <TouchableOpacity style={styles.image}>
        <Image source={ image }/>
      </TouchableOpacity>
    )
  }
}

const styles = {
  image: {
    padding: 10
  }
}
