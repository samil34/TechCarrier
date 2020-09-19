
import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity, Picker, TextInput } from 'react-native';

import { connect } from 'react-redux';
import { editProfile, getProfile } from '../../redux/actions';


const Edit = (props) => {

 const uid = '9t6MMNm9Q1TCQV8Q0VRktWFVXu32'

  useEffect(() => {
      props.getProfile(uid);
  }, []);

  console.log(props.profile)

    const [cinsiyet, setCinsiyet] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [bio, setBio] = useState('')
    const [tel, setTel] = useState('')
    const [profilePic, setProfilepic] = useState('')

    return (


        <ScrollView>


            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 0.7, backgroundColor: '#0087d1' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15, borderColor: 'gray' }}>

                        <Text onPress={() => { props.navigation.navigate('ProfileScreen') }} style={{ color: 'white', fontSize: 15 }}>İptal</Text>
                        <Text style={{ color: 'white', fontSize: 15 }}> Profil Düzenle  </Text>
                        <Text onPress={() => {
                          const params = { uid, cinsiyet, bio, name, username, tel, profilePic }
                          props.editProfile(params)
                        }}
                              style={{ color: 'white', fontSize: 15 }}>Kaydet</Text>

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
                            <TextInput
                            value={name}
                              autoFocus
                              placeholder='Ad-Soyad'
                              onChangeText={(name) => setName(name)}
                            />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center', marginLeft: 5 }}>
                            <Text>Kullanıcı Adi</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', marginBottom: 10 }}>
                            <TextInput
                            value={username}
                              autoFocus
                              placeholder="Kullanici Adi"
                              onChangeText={(username) => setUsername(username)}
                            />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center', marginLeft: 5 }}>
                            <Text>Bio</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', marginBottom: 10 }}>
                            <TextInput
                            value={bio}
                              autoFocus
                              placeholder="Bio"
                              onChangeText={(bio) => setBio(bio)}
                            />
                        </View>

                    </View>


                    <View style={{ flex: 0.3, flexDirection: 'row', marginTop: 10 }}>

                        <View style={{ height: 30, width: '25%', justifyContent: 'center', marginLeft: 5 }}>
                            <Text style={{ fontWeight: 'bold' }} >Gizli Bilgiler</Text>
                        </View>


                    </View>


                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ height: 45, width: '25%', justifyContent: 'center' }}>
                            <Text style={{ marginLeft: 5 }}>Telefon</Text>
                        </View>



                        <View style={{ borderBottomWidth: 0.5, height: 45, width: '50%', justifyContent: 'center' }}>
                        <TextInput
                        value={tel}
                          autoFocus
                          placeholder="Telefon"
                          onChangeText={(tel) => setTel(tel)}
                        />
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
                                onValueChange={(itemValue, itemIndex) => setCinsiyet(itemValue)}
                            >
                                <Picker.Item label="Erkek" value="erkek" />
                                <Picker.Item label="Kadın" value="kadin" />
                                <Picker.Item label="Özel" value="other" />
                                <Picker.Item label="Söylememeyi Tercih Ederim" value="private" />
                            </Picker>
                        </View>

                    </View>



                </View>
            </View>


        </ScrollView>

    );
}

const mapStateToProps = ({ profileResponse }) => {
  const { profile, loading } = profileResponse;
  return { profile, loading };
};

export default connect(mapStateToProps, { editProfile, getProfile })(Edit);
