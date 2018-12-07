import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, SafeAreaView, TextInput, Button} from 'react-native';

export default class SantaLetter extends Component {

  onChangeText(value){
    this.setState({
      textValue: value
    })
  }

  onSubmit(){
    console.log('Submitted')
  }

  render() {
    const { letter } = this.props.letter

    return (
      <SafeAreaView style={{flex:1}}>
        <TextInput
          placeholder='Write the gifts you want here!'
          style={{height: 150, width: 340, borderColor: 'gray', borderWidth: 2, backgroundColor: 'white'}}
          onChangeText={(value) => this.onChangeText(value)}
          onSubmitEditing={this.onSubmit}
          multiline = {true}
        />
        <Button
          title="Email Santa"
          style={{borderColor: 'green', borderWidth: 1}}
          
        />
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('SantaLetter', () => SantaLetter);
  //onChangeText={(text) => this.setState({text})}
