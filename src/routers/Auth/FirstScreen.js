import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { Icon } from 'native-base'
import { colors } from '../../style';
import { Input, Button } from '../../components'


const FirstScreen = (props) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }} >



        <View style={{ flex: 3, width: '70%', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../img/logo2.png')}
                style={{ width: '21%', height: '30%' }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>TechCareer</Text>

        </View>


        <View style={{ flex: 3, width: '70%' }}>

            <Image
                source={require('../../img/first.jpg')}
                style={{ width: '100%', height: '100%' }}
            />



        </View>

        <View style={{ flex: 4, width: '70%', alignItems: 'center', justifyContent: 'center' }}>



            <Button
                text={'Hesap Oluştur'}
                onPress={() => {
                    props.navigation.navigate('SignUpScreen')
                }}
            />

            <Button
                text={'Giriş Yap'}
                onPress={() => {
                    props.navigation.navigate('LoginScreen')
                }}
            />

        </View>




    </SafeAreaView>
);

export default FirstScreen;