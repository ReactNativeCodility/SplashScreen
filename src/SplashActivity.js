import React, { Component } from 'react';
import {
Image,
Dimensions,
TouchableOpacity
} from 'react-native';
import custom from './css/custom';

export default class SplashActivity extends Component {
    
componentDidMount() {
    setTimeout(()=> {
        this.props.navigation.navigate('Home');   
    }, 3000);
}

render() {

var width = Dimensions.get('window').width;

return (
    <TouchableOpacity style={custom.indexContainer}>
   
    <Image
        source={require('./images/spl.jpg')}
        style={[
            custom.base, {
            resizeMode: 'cover'
        }, {
            alignSelf: 'center'
        }, {
            width: width
        }, {
            height: '100%'
        }
        ]} />

    </TouchableOpacity>
    );
}
}