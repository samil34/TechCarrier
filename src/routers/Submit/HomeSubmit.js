import React from 'react'
import { Text, View, SafeAreaView, ScrollView, Keyboard } from 'react-native'

import { Button, Input } from '../../components';
import { Icon } from 'native-base';

import RNPickerSelect from 'react-native-picker-select';


const HomeSubmit = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            
             <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: 'black', fontSize: 16 }}>Vazgeç</Text>
                <Button
                    text={'Gönder'}
                   // loading={props.loading}
                    textStyle={{ fontSize: 14 }}
                    onPress={() => {
                       
                    }}
                    style={{ width: '20%', height: 30 }}
                />
            </View>
            

            <View style={{ flex: 12, padding: 10 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Icon name={'user'} type='FontAwesome' size={40} onPress={() => { }} />

                    <Input
                        placeholder='Kategori'
                        style={{ flex: 1, height: 50, padding: 10, borderBottomWidth: 0 }}
                      //  value={tweet} anlamadım
                        maxLength={140}
                       // onChangeText={(tweet) => setTweet(tweet)}
                        autoFocus
                        multiline
                        
                    />
                    
                    
                </View>
               

            </View>
            
        </SafeAreaView>

    )
}

export default HomeSubmit;
