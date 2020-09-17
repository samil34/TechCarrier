import React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { Icon } from 'native-base'
import { colors } from '../../style';
import { Input, Button } from '../../components'


const FirstScreen = (props) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '' }} >

        {/* <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
            <Image
                source={require('../../img/logo2.png')}
                style={{ width: 50, height: 50 }}
            />
        </View> */}

        <View style={{ flex: 3, width: '70%', backgroundColor: '', alignItems: 'center', justifyContent: 'center' }}>
            <Image
                source={require('../../img/logo2.png')}
                style={{ width: 50, height: 50 }}
            />
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>TechCareer</Text>

        </View>


        {/* <View style={{ flex: 6, backgroundColor: 'blue', width: '80%', alignItems: 'center', justifyContent: 'center' }}>
       
        
            <Text style={{
                fontWeight: 'bold',
                fontSize: 25,
                width: '100%',
                marginBottom: 20,
                textAlign: 'left',
                padding: 10,
            }}>Şu anda dünyada olup bitenleri gör.</Text>
            <Button
                text={'Hesap Oluştur'}
                onPress={() => {
                    props.navigation.navigate('SignUpScreen')
                }}
            />
        </View> */}

        <View style= {{flex: 3, width:'70%', backgroundColor:'red'}}>
      
       <Text>Teknoloji, Carrier, Girişimcilik</Text>

        </View>

        <View style={{ flex: 3, width: '70%', backgroundColor: 'purple', alignItems: 'center', justifyContent: 'center' }}>

            
            <Button
                text={'Hesap Oluştur'}
                onPress={() => {
                    props.navigation.navigate('SignUpScreen')
                }}
            />

            <Button
                text={'Giriş Yap'}
                onPress={() => {
                    props.navigation.navigate('SignUpScreen')
                }}
            />

        </View>

        


    </SafeAreaView>
);

export default FirstScreen;