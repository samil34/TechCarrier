import React from 'react';
import { Text, View, SafeAreaView,Image } from 'react-native';
import { Icon } from 'native-base'
import { colors } from '../../style';
import { Input, Button } from '../../components'

import { connect } from 'react-redux';
import { isUser } from '../../redux/actions'


const FirstScreen = (props) => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '' }} >
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Icon style={{ color: colors.main }} type="FontAwesome" name={'book'} fontSize={40} />
        </View>

        <View style={{ marginLeft:-25, width:100,height:25}}>
       <Image
          source = {require('../../img/logo.png')}

       />


       </View>
        <View style={{ flex: 8, backgroundColor: 'red', width: '80%', alignItems: 'center', justifyContent: 'center' }}>


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
        </View>

        <View style={{ flex: 1, width: '70%', backgroundColor: '' }}>
            <Text style={{ fontSize: 12 }}>Zaten bir hesabın var mı?
                <Text style={{ color: colors.main }} onPress={() => { props.navigation.navigate('LoginScreen') }}> Giriş yap</Text></Text>
        </View>
    </SafeAreaView>
);

const mapStateToProps = ({ authResponse }) => {
  const { loading, user } = authResponse;
  return { loading, user };
};

export default connect(mapStateToProps, { isUser })(FirstScreen);
