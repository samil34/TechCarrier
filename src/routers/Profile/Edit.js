
import React, { useState } from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Picker, TextInput } from 'react-native';



const Edit = (props) => {

    const [cinsiyet, setCinsiyet] = useState('Erkek')



    return (


        <ScrollView>


            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 0.7, backgroundColor: '#0087d1' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderColor: 'gray' }}>

                        <Text onPress={() => { props.navigation.navigate('ProfileScreen') }} style={{ color: 'white', fontSize: 15 }}>İptal</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}> Profil Düzenle  </Text>
                        <Text onPress={() => { }} style={{ color: 'white', fontSize: 15 }}>Kaydet</Text>

                    </View>

                    <View style={{ flex: 0.3, alignItems: 'center', marginTop: 25, marginBottom: 20 }}>
                        <Image style={{ borderWidth: 0.4, borderColor: 'white', height: 90, width: 90, borderRadius: 65, marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Profil Fotoğrafını Değiştir</Text>
                    </View>




                </View>




                <View style={{ flex: 1.1, backgroundColor: '#f5f5f5', borderTopWidth: 0.5 }}>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5 }}>Adı</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', justifyContent: 'center' }}>
                            <TextInput>Şamil Akpınr</TextInput>
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center', marginLeft: 5 }}>
                            <Text>Kullanıcı</Text>
                            <Text>adı</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', marginBottom: 10 }}>
                            <TextInput>samil_akpinar</TextInput>
                        </View>

                    </View>
                    <TouchableOpacity

                        onPress={() => { props.navigation.navigate('Biyografi') }}
                    >



                        <View style={{ flexDirection: 'row' }}>

                            <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                                <Text style={{ marginLeft: 5 }}>Biyografi</Text>

                            </View>



                            <View style={{ height: 45, width: '50%', marginBottom: 15 }}>
                                <Text >Biyografi</Text>
                                <Text >Biyografi</Text>
                                <Text >Biyografi</Text>


                            </View>
                        </View>

                    </TouchableOpacity>


                    <View style={{ flex: 0.3, flexDirection: 'row', marginTop: 10 }}>

                        <View style={{ height: 30, width: '25%', justifyContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold' }} >Gizli Bilgiler</Text>
                        </View>


                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5 }}>E-posta</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', justifyContent: 'center' }}>
                            <TextInput >samil5807@gmail.com</TextInput>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5 }}>Telefon</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', justifyContent: 'center' }}>
                            <TextInput >05334564407</TextInput>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5 }}>Cinsiyet</Text>
                        </View>



                        <View style={{
                            borderBottomWidth: 0.5
                            , height: 45, width: '50%', justifyContent: 'center'
                        }}>
                            <Picker
                                selectedValue={cinsiyet}
                                style={{ width: 145 }}
                                onValueChange={(cinsiyet, itemIndex) => setCinsiyet(cinsiyet)}
                            >
                                <Picker.Item label="Erkek" value="Erkek" />
                                <Picker.Item label="Kadın" value="Kadın" />
                                <Picker.Item label="Özel" value="Özel" />
                                <Picker.Item label="Söylememeyi Tercih Ederim" value="Söylememeyi Tercih Ederim" />
                            </Picker>
                        </View>

                    </View>



                </View>
            </View>


        </ScrollView>

    );
}

export default Edit;
