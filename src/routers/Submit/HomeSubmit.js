import React, { useState } from 'react'
import { Platform, Text, View, SafeAreaView, ScrollView, Keyboard, Picker, StyleSheet, TextInput } from 'react-native'

import { Button, Input } from '../../components';
import { Icon } from 'native-base';

import { addItem } from '../../redux/actions';
import { connect } from 'react-redux';

const HomeSubmit = (props) => {


    const [kategori, setKategori] = useState('Teknoloji')
    const [aciklama, setAciklama] = useState('')
    const [link, setLink] = useState('')



    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: 'black', fontSize: 16 }}>Vazgeç</Text>
                <Button
                    text={'Gönder'}
                    // loading={props.loading}
                    textStyle={{ fontSize: 16 }}
                    onPress={() => {
                        addItem({
                            "user":{"name":"Mukaddes", "rozet":"Rozet ismi 3. gun"},
                            "dsc":aciklama,
                            "category":kategori,
                            "link":"https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/",
                            "likes":["eren","onur","mukaddes"],
                            "comments":["eren","onur","mukaddes"]
                        })
                    }}
                    style={{ width: '20%', height: 35 }}
                />
            </View>


            <View style={{ flex: 12, padding: 10 }}>



                <View style={styles.container}>
                    <Picker
                        selectedValue={kategori}
                        style={{ height: 50, width: 145 }}
                        onValueChange={(kategori, itemIndex) => setKategori(kategori)}
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
                        onChangeText= {(aciklama)=>setAciklama(aciklama)}
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
                        onChangeText= {(link)=>setLink(link)}
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


const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};

export default connect(mapStateToProps, { addItem })(HomeSubmit);