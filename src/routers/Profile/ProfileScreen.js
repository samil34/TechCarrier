import React,{useState} from 'react';
import { Text, View, Image, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../../style';
import { color } from 'react-native-reanimated';



const ProfileScreen = (props) => {


    const [data, setData] = useState(['1','2'])

    const [image, setImage] = useState([''])
    const [aciklama,setAciklama] = useState(['ververasdfasfasi']);

    const renderItem = ({ item }) => (
        <View style={{ marginLeft: 15, marginRight: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}>

            {/* eğer paylaşım girişimcilik ise onun dışarıdan bir fotosunu koyacağız */}
            <Image  style={{ borderWidth: 1, borderColor: 'gray', width: 50, height: 50, borderRadius: 7 }}></Image>
            {/* Tıklamalı yazı linki olacak yada başka bir sayfa acılacak */}
    <Text style={{ marginLeft: 10, marginRight: 50 }}>{item.aciklama}</Text>


        </View>
    );


    return (

        
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1, backgroundColor: '#0087d1' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>
                        <Text onPress={() => { props.navigation.navigate('HomeScreen') }} style={{ color: 'white', fontSize: 15 }}>Cıkış</Text>
                        <Text onPress={() => { props.navigation.navigate('Edit') }} style={{ color: 'white', fontSize: 15 }}> Düzenle  </Text>
                    </View>

                    <View style={{ flex: 0.8, alignItems: 'center', marginBottom: 5 }}>
                        <Image style={{ borderWidth: 0.5, borderColor: 'white', height: 80, width: 80, borderRadius: 55, marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#f5f5f5' }}>Şamil Akpınar</Text>
                        <View style={{ marginLeft: 130, marginTop: 10, marginRight: 130 }}>
                            <Text style={{ color: 'white' }}>Kişi Bilgisi yazılacak</Text>
                            <Text style={{ color: 'white' }}>Kişi Bilgisi yazılacak</Text>
                            <Text style={{ color: 'white' }}>Kişi Bilgisi yazılacak</Text>
                            <Text style={{ color: 'white' }}>Kişi Bilgisi yazılacak</Text>



                        </View>

                    </View>

                    <View style={{ flex: 0.3, backgroundColor: '#0087d1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginBottom: 20 }} >
                        <TouchableOpacity style={{ marginLeft: 35, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} >15</Text>
                            <Text style={{ fontSize: 15, color: 'white' }} >Gönderiler</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} >15</Text>
                            <Text style={{ fontSize: 15, color: 'white' }} >Kaydedilenler</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginRight: 35, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Yeni</Text>
                            <Text style={{ fontSize: 15, color: 'white' }}>Rozet</Text>
                        </TouchableOpacity>



                    </View>


                </View>




                <View style={{ flex: 1.1, backgroundColor: '#ffffff', marginBottom: 25 }}>


                    <FlatList
                        style={{ flex: 1 }}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.aciklama
                        }
                        ListEmptyComponent={() => {
                            return (
                                <View style={{
                                    alignItems: 'center',
                                    marginTop: 20,
                                    height: 300,
                                    justifyContent: 'center'
                                }}>
                                    <Text
                                        style={{ fontSize: 15, marginBottom: 30 }}
                                    >
                                        Herhangi Bir gönderi bulunamadı!
                            </Text>
                                </View>
                            )
                        }}
                    />















                </View>
            </View>

        

    )

}

export default ProfileScreen;