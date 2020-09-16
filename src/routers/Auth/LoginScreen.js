import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../redux/actions'
import { Input, Button } from '../../components'


const LoginScreen = (props) => {

  const [email, setEmail] = useState('deneme@deneme.com')
  const [password, setPassword] = useState('123456')

  return(
    <ScrollView style={{ flex:1, padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, width: '70%', marginBottom: 20, textAlign: 'left', }}>Giriş yap</Text>
      <Input
        placeholder={'E-posta'}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <Input
        placeholder={'Şifre'}
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        text={'Giris Yap'}
        onPress={() => {
          const params = { email, password }
          props.login(params)
        }}
      />
    </ScrollView>
  )
}


const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, { login })(LoginScreen);
