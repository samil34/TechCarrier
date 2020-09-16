import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { register } from '../../redux/actions'
import { Input, Button } from '../../components'


const SignUpScreen = (props) => {

  const [name, setName] = useState('test1')
  const [username, setUsername] = useState('test1')
  const [email, setEmail] = useState('deneme@deneme.com')
  const [password, setPassword] = useState('123456')

  return(
    <ScrollView style={{ flex:1, padding: 20 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 20, width: '70%', marginBottom: 20, textAlign: 'left', }}>Kayit Ol</Text>

      <Input
        placeholder={'Isim'}
        value={name}
        onChangeText={(name) => setName(name)}
      />

      <Input
        placeholder={'Kullanici adi'}
        value={username}
        onChangeText={(username) => setUsername(username)}
      />

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
        text={'Kayit Ol'}
        onPress={() => {
          const params = { email, password, name, username }
          props.register(params)
        }}
      />
    </ScrollView>
  )
}


const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, { register })(SignUpScreen);
