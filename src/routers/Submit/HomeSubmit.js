import React, { useState } from 'react'
import { Platform, Text, View, SafeAreaView, ScrollView, Keyboard, Picker, StyleSheet, TextInput } from 'react-native'

import { Button, Input } from '../../components';
import { Icon } from 'native-base';



const HomeSubmit = (props) => {


    const [kategori, setKategori] = useState('')
    const [aciklama, setAciklama] = useState('')
    const [link, setLink] = useState('')


    const [selectedValue, setSelectedValue] = useState("Teknoloji");


    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: 'black', fontSize: 16 }}>Vazgeç</Text>
                <Button
                    text={'Gönder'}
                    // loading={props.loading}
                    textStyle={{ fontSize: 16 }}
                    onPress={() => {

                    }}
                    style={{ width: '20%', height: 35 }}
                />
            </View>


            <View style={{ flex: 12, padding: 10 }}>



                <View style={styles.container}>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 145 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Teknoloji" value="Teknoloji" />
                        <Picker.Item label="Girişimcilik" value="Girişimcilik" />
                        <Picker.Item label="Kariyer" value="Kariyer" />
                    </Picker>
                </View>


                <View style={styles.MainContainer}>


                    <TextInput
                        style={styles.TextInputStyleClass}
                        underlineColorAndroid="transparent"
                        placeholder={"Açıklama Yaz"}
                        placeholderTextColor={"#9E9E9E"}
                        numberOfLines={30}
                        multiline={true}
                    />

                </View>



                <View style={styles.MainContainer}>


                    <TextInput
                        style={styles.TextInputStyleClass}
                        underlineColorAndroid="transparent"
                        placeholder={"Web Linki"}
                        placeholderTextColor={"#9E9E9E"}
                        numberOfLines={10}
                        multiline={true}
                    />

                </View>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: '#9E9E9E',
        width: '37%',

    },

    MainContainer: {


        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,

        margin: 10,
        marginLeft: 0

    },

    TextInputStyleClass: {


        height: 25,
        borderBottomWidth: 1,
        borderColor: '#9E9E9E',

        height: 100

    }
});


export default HomeSubmit;
