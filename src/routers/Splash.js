import React, {Component, useEffect} from 'react';
import {View, Animated, Easing, Image, Text} from 'react-native';

export default class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {spinAnim: new Animated.Value(0)};
  }
  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    setTimeout(() => {
      this.props.navigation.navigate('FirstScreen');
    }, 2000);
  }

  render() {
    //console.log("props",this.props.navigate("FirstScreen"))
    const imageSource = require('../img/logo2.png');
    const imageTextSource = require('../img/logo3.png');
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.Image
          style={{transform: [{rotate: spin}]}}
          source={imageSource}
        />
        <Image style={{height:50}} resizeMode="contain" source={imageTextSource} />
      </View>
    );
  }
}
