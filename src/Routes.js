import React, { Component } from 'react';
import { YellowBox} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from './App';
import SplashActivity from './SplashActivity';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const HomeStack = createStackNavigator({
    Home:{ screen : App,
      navigationOptions: {
        title:'Home screen',
        headerLeft: null
      }
    },
    Splash: { screen: SplashActivity,
        navigationOptions: {
         header: null ,
      }
    }
  },
  {
    initialRouteName: 'Splash',
  });

export default class Routes extends Component {

render() {
    return (
        <HomeStack />
    );
  }
}