import React, { useState } from 'react'
import { Platform, Text, View, SafeAreaView, ScrollView, Keyboard,Picker, StyleSheet, TextInput } from 'react-native'

import { Button, Input } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

import { addPost } from '../../redux/actions';
import { connect } from 'react-redux';


const CourseSubmit = (props) => {


    const [kategori, setKategori] = useState('Teknoloji')
    const [aciklama, setAciklama] = useState('')
    const [link, setLink] = useState('')



    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'#f5f5f5' }}>

            <View style={{ backgroundColor:'', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',padding:15 }}>
                <Text onPress={() => props.navigation.pop()} style={{ color: colors.main, fontWeight:'bold', fontSize: 16 }}>Vazgeç</Text>
                {/* <Icon onPress={()=> {props.navigation.pop()}} name={'times'} size={30} color={colors.main} /> */}
                
                
                <Text
                    style={{ borderWidth:1,borderColor:'gray', padding:10, borderRadius:20, backgroundColor: colors.main, color:'white', fontWeight:'bold', fontSize: 16 }}
                    onPress={() => {
                        props.addPost({
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
             <View>
                 <Text style= {{marginBottom:5}}>Online eğitimin düzenleneceği platformu seçiniz!</Text>
             </View>
            <View style={styles.container}>
                    <Picker
                        selectedValue={kategori}
                        style={{ height: 50, width: 145 }}
                        onValueChange={(kategori, itemIndex) => setKategori(kategori)}
                    >
                        <Picker.Item label="Youtube" value="Youtube" />
                        <Picker.Item label="Zoom" value="Zoom" />
                        <Picker.Item label="Diğer Platform" value="Diğer Platform" />
                    </Picker>
                </View>



                <View style={{ backgroundColor:''}}>

                <TextInput
                  style= {{  backgroundColor: 'white',borderWidth:0.5,borderColor:'gray',height:100, borderRadius:20,fontSize:15,paddingLeft:10  }}
                        underlineColorAndroid="transparent"
                        placeholder={"Eğitim hakkında bilgi veriniz..."}
                        placeholderTextColor={"#9E9E9E"}
                        numberOfLines={30}
                        multiline={true}
                        autoFocus
                />


                </View>

                <View style={{ marginTop:10 }}>

                <TextInput
                  style= {{  backgroundColor: 'white',borderWidth:0.5,borderColor:'gray', borderRadius:20,fontSize:15,paddingLeft:10 }}
                  placeholder={"Link Gönder..."}
                />

                </View>

            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.5,
        borderColor:'gray',
        borderRadius:20,
        backgroundColor:'white',
        width: '37%',
        marginBottom:10,
        paddingLeft:5

    }
});


const mapStateToProps = ({ listResponse }) => {
    const { loading, list } = listResponse;
    return { loading, list };
};


export default connect(mapStateToProps, { addPost })(CourseSubmit);





