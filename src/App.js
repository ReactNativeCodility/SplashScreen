import React, { Component } from 'react';
import {
  Platform,BackHandler,
  Text,Image,
  View
} from 'react-native';
import custom from './css/custom';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  
  componentWillMount(){
    BackHandler.addEventListener('hardwareBackPress', function() {
        BackHandler.exitApp();
    });
  }

  render() {
    return (
      
      <View style={custom.container}>
  
        <Text style={custom.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={custom.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={custom.instructions}>
          {instructions}
        </Text>

        <Image source={require('./images/react.png')} style={{width: 300, height: 300}} />
      
      </View>
    );
  }
}
