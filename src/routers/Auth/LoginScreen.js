import React from 'react';
import { Text, View, SafeAreaView,ScrollView } from 'react-native';
import { colors } from '../../style';
import {Icon} from 'native-base';
import {Input, Button} from '../../components'


const LoginScreen = (props) =>{ 
    return(
        <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between' }}>
            <Text onPress={() => props.navigation.pop()} style={{ color: colors.main, fontSize: 14 }}>Vazgeç</Text>
            <Icon style={{ color: colors.main }} type="FontAwesome" name={'twitter'} fontSize={40} />
            <Icon style={{ color: colors.main }} type="FontAwesome" name={'ellipsis-h'} fontSize={25} />
        </View>

        <View style={{ flex: 9 }}>
            <ScrollView style={{ padding: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, width: '70%', marginBottom: 20, textAlign: 'left', }}>Twitter'a kayıt ol</Text>

                <Input
                    placeholder={'isim'}
                  //  value={name}
                  //  onChangeText={(name) => setName(name)}
                   style={styles.input}
                />

                <Input
                    placeholder={'kullanıcı adı'}
                   // value={username}
                   // onChangeText={(username) => setUsername(username)}
                    style={styles.input}

                />

                <Input
                    placeholder={'emai'}
                   // value={email}
                  //  onChangeText={(email) => setEmail(email)}
                    style={styles.input}

                />

                <Input
                    placeholder={'şifre'}
                    secureTextEntry
                  //  value={password}
                  //  onChangeText={(password) => setPassword(password)}
                    style={styles.input}

                />

            </ScrollView>
        </View>



       
            <Text style={{ color: colors.main, fontSize: 14 }}>Şifreni mi unuttun?</Text>

            <Button
                text={'Kayıt Ol'}
                onPress={() => {
                   
                }}
                style={{ width: '25%', height: 30 }}
            />
        



    </SafeAreaView>
    )
   
}

const styles = {
    input: {  height: '20%', }
 }


export default LoginScreen;