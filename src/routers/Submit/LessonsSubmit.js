import React, { useState } from 'react'
import { Platform, Text, View, SafeAreaView, ScrollView, Keyboard, Picker, StyleSheet, TextInput } from 'react-native'

import { Button, Input } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

import { addLesson } from '../../redux/actions';
import { connect } from 'react-redux';


const LessonsSubmit = (props) => {


    const [kategori, setKategori] = useState('Teknoloji')
    const [aciklama, setAciklama] = useState('')
    const [link, setLink] = useState('')



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

            <View style={{ backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: colors.main, fontWeight: 'bold', fontSize: 16 }}>Vazgeç</Text>
                {/* <Icon onPress={()=> {props.navigation.pop()}} name={'times'} size={30} color={colors.main} /> */}


                <Text
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, borderRadius: 20, backgroundColor: colors.main, color: 'white', fontWeight: 'bold', fontSize: 16 }}
                    onPress={() => {
                        props.addLesson({
                            "user": { "name": "Mukaddes", "rozet": "Rozet ismi 3. gun" },
                            "dsc": aciklama,
                            "category": kategori,
                            "link": link,
                            "likes": 0,
                        })
                    }}

                >Gönder</Text>


            </View>


            <View style={{ flex: 12, padding: 10 }}>

                <View style={{ marginBottom:10 }}>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.5, borderColor: 'gray', borderRadius: 20, fontSize: 15, paddingLeft: 10 }}
                        placeholder={"Ders'in yayınlandığı site..."}
                    />




                </View>

                <View style={{ backgroundColor: '' }}>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.5, borderColor: 'gray', height: 100, borderRadius: 20, fontSize: 15, paddingLeft: 10 }}
                        onChangeText={(aciklama) => setAciklama(aciklama)}
                        underlineColorAndroid="transparent"
                        placeholder={"Dersin İçeriğini giriniz..."}
                        placeholderTextColor={"#9E9E9E"}
                        numberOfLines={30}
                        multiline={true}
                        autoFocus
                    />





                </View>

                <View style={{ marginTop: 10 }}>

                    <TextInput
                        style={{ backgroundColor: 'white', borderWidth: 0.5, borderColor: 'gray', borderRadius: 20, fontSize: 15, paddingLeft: 10 }}
                        onChangeText={(link) => setLink(link)}
                        placeholder={"Link Gönder..."}
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
        //width: '37%',

    },

    MainContainer: {


        // paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        // margin: 10,
        backgroundColor: 'blue',

    },

    TextInputStyleClass: {

        backgroundColor: 'red',
        borderBottomWidth: 1,
        borderColor: '#9E9E9E',
        // height: 100

    }
});


const mapStateToProps = ({ lessonResponse }) => {
    const { loading, list } = lessonResponse;
    return { loading, list };
};

export default connect(mapStateToProps, { addLesson })(LessonsSubmit);
