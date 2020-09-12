import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

const UselessTextInput = (props) => {
    return (
        <TextInput
        style={{fontSize:16}}
            {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
            editable
            autoFocus
            maxLength={100}
            
        />
    );
}

const Biyografi = (props) => {
    const [value, onChangeText] = React.useState('');

    // If you type something in the text box that is a color, the background will change to that
    // color.
    return (
        <View
            style={{
                backgroundColor: '#f5f5f5',
                borderBottomColor: '#000000',
                borderBottomWidth: 0.5,
                
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderColor: 'gray', borderBottomWidth:0.5,backgroundColor:'#f5f5f5' }}>

                <Text onPress={() => { props.navigation.navigate('Edit') }} style={{ color: 'black', fontSize: 15 }}>İptal</Text>
                <Text style={{ color: 'black', fontSize: 15 }}> Biyografi  </Text>
                <Text onPress={() => { }} style={{ color: 'black', fontSize: 15 }}>Kaydet</Text>

            </View>


            <UselessTextInput
                multiline
                numberOfLines={5}
                onChangeText={text => onChangeText(text)}
                value={value}
            />



        </View>
    );
}

export default Biyografi;