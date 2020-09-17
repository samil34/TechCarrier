import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

const SignUpScreen = (props) => {
  

    return (
      <View style={styles.container}>
          <View style={styles.inputView} >

          </View>
        <Text>Open up App.js to start working on your app!s</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  }
});




export default SignUpScreen;