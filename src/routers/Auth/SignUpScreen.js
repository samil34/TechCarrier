import React, { useState, useEffect, useRef } from 'react';
import { Text, View, SafeAreaView, ScrollView, Animated, Keyboard, StyleSheet, TextInput,Image, TextBase } from 'react-native';
import { colors } from '../../style';
import { Icon } from 'native-base';
import { Input, Button } from '../../components'

import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';


const SignUpScreen = (props) => {

    const [name, setName] = useState('test')
    const [username, setUsername] = useState('test1')
    const [email, setEmail] = useState('test@test.com')
    const [password, setPassword] = useState('123456')

    const animation = useRef(new Animated.Value(0)).current;

    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Keyboard.addListener("keyboardWillShow", _keyboardWillShow);
        Keyboard.addListener("keyboardWillHide", _keyboardWillHide);

        return () => {
            Keyboard.removeListener("keyboardWillShow", _keyboardWillShow);
            Keyboard.removeListener("keyboardWillHide", _keyboardWillHide);
        };


    }, []);

    const _keyboardWillShow = (e) => {
        const height = e.endCoordinates.height
        Animated.timing(animation, {
            toValue: -height + 34,
            duration: 300
        }).start();
    };

    const _keyboardWillHide = (e) => {
        Animated.timing(animation, {
            toValue: 0,
            duration: 300
        }).start();
    };




    return (
        <SafeAreaView style={{ flex: 1, backgroundColor:'#003f5c' }}>

            < View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>

                <Icon onPress={() => props.navigation.pop()} style={{ color: colors.main }} type="FontAwesome" name={'times'} fontSize={40} />

            </View>

            <View style={{ flex: 9 }}>
                <ScrollView style={{ padding: 20 }}>
                <View style = {{flexDirection:'row',alignItems:'center',marginBottom:15}}>
                 <Image 
                         source={require('../../img/logo2.png')}
                         style={{width: 50,height: 50,}}
                         />
                         <Text style={{  fontSize: 20, width: '70%', textAlign: 'left',color:'white',marginLeft:10 }}>
                          TechCareer'e Kayıt Ol</Text>
                 </View>

                    <View style={styles.inputView} >
                        
                        <TextInput
                            autoFocus
                            style={styles.inputText}
                            placeholder="İsim Soyisim..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>

                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Kullanıcı Adı..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>

                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Email..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>

                    <View style={styles.inputView} >
                        <TextInput
                            style={styles.inputText}
                            placeholder="Şifre..."
                            placeholderTextColor="#003f5c"
                            onChangeText={text => this.setState({ email: text })}
                        />
                    </View>

                </ScrollView>

            </View>



            <Animated.View
                style={
                    [{
                        flex: 0.6,
                        backgroundColor: '#edeeef',
                        borderTopColor: '#b7b7b7',
                        borderTopWidth: 0.3,
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 15,
                        justifyContent: 'space-between',
                        backgroundColor:'#003f5c'
                    },
                    {
                        transform: [
                            {
                                translateY: animation,
                            }
                        ]

                    }
                    ]
                }>
                <Text style={{ color: colors.main, fontSize: 14 }}>Şifreni mi unuttun?</Text>

                <TouchableOpacity
                    style={{
                        backgroundColor: colors.main,
                        // width: '80%',
                        padding: 15,
                        height: 35,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: 'white'
                        }}

                    >Kayıt Ol</Text>

                </TouchableOpacity>

            </Animated.View>




        </SafeAreaView>
    )

}





const styles = StyleSheet.create({
    input: { height: '20%', },


    inputView: {

        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 25,
        height: 25,
        marginBottom: 10,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "white"
    }

});

export default SignUpScreen;