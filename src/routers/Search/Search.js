import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { colors } from '../../style';

const Search = (props) => {


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5',marginTop:10 }}>

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>

                        <Image
                            source={require('../../img/tech5png.png')}

                            style={{ marginLeft: 25, width: 100, height: 100 }}

                        />

                        <Text>Teknokoji</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.item}
                  onPress={() => { props.navigation.navigate('SearchCategory') }}
                  >

                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../img/girisim1.png')}
                            style={{ marginLeft: 25, width: 100, height: 100 }}

                        />
                        <Text>Girişimcilik</Text>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../img/carriers.png')}
                            style={{ marginLeft: 25, width: 100, height: 100 }}

                        />
                        <Text>Kariyer</Text>

                    </View>
                </TouchableOpacity>

            </View>





            <Text style={{ margin: 15, borderBottomWidth: 1, borderColor: 'gray', fontSize: 15 }}>Online Eğitimler</Text>


            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>

                        <Image
                            source={require('../../img/youtube.jpg')}

                            style={{  width: 150, height: 100 }}

                        />

                        <Text>Youtube</Text>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../img/zoom2.png')}
                            style={{ marginLeft: 10
                                , width: 135, height: 105 }}

                        />
                        <Text>Zoom</Text>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../img/diger2.png')}
                            style={{ marginLeft: 25, width: 100, height: 100 }}

                        />
                        <Text style={{marginTop:5}}>Diğer Platformlar</Text>

                    </View>
                </TouchableOpacity>

            </View>


            <Text style={{ margin: 15, borderBottomWidth: 1, borderColor: 'gray', fontSize: 15 }}>Dersler</Text>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TouchableOpacity 
                style={styles.item}
                onPress={() => { props.navigation.navigate('SearchCategory') }}
                >

                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../img/dersler2.png')}
                            style={{ marginLeft: 25, width: 100, height: 100 }}

                        />
                        <Text style={{marginTop:5}}>Ücretsiz Dersler</Text>

                    </View>
                </TouchableOpacity>

            </View>





        </ScrollView>

    )



}

const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginLeft: 10,
        marginBottom:10,
        borderWidth: 0.5,
        borderRadius: 15,
        borderColor: 'gray',
        width: '46.5%',
        backgroundColor: '#ffffff',

    }


});

export default Search;
