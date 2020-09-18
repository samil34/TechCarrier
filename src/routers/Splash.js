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

/*import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Animated from 'react-native-reanimated';
import SpinningImage from 'react-native-spinning-image';
const imageSource = require('../img/logo2.png');
const SplashScreen = ({navigation}) => {
  useEffect(() => {
    /*setTimeout(() => {
      navigation.navigate('FirstScreen');
    }, 3000);
  });
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <SpinningImage
        speed={3000}
        rotations={5}
        direction="counter"
        source={imageSource}
      />
    </View>
  );
};

export default SplashScreen;*/
