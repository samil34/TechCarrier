/*This is an Example to make a View Like Android Fragment in React Native*/
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import  Gonderiler from './Gonderiler'
import Kaydedilenler from './Kaydedilenler';
import  Rozet from './Rozet'


const ProfileScreen = (props) => {

    const [val, setVal] = useState(1);
  
    function renderElement() {
        //You can add N number of Views here in if-else condition
        if (val === 1) {
            //Return the FirstScreen as a child to set in Parent View
            return <Gonderiler />;
           // props.navigation.navigate('Gonderiler')
        } else if (val === 2) {
            //Return the SecondScreen as a child to set in Parent View
            return <Kaydedilenler />;
        } else {
            //Return the ThirdScreen as a child to set in Parent View
            return <Rozet />;
        }
    }

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

                    <View style={{ flex: 0.3, backgroundColor: '#0087d1', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginBottom: 20 }} >
                        <TouchableOpacity
                            style={{ marginLeft: 35, alignItems: 'center' }}
                            onPress={() => setVal(1)}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} >15</Text>
                            <Text style={{ fontSize: 15, color: 'white' }} >Gönderiler</Text>

                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => setVal(2)}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }} >15</Text>
                            <Text style={{ fontSize: 15, color: 'white' }} >Kaydedilenler</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ marginRight: 35, alignItems: 'center' }}
                            onPress={() => setVal(3)}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Yeni</Text>
                            <Text style={{ fontSize: 15, color: 'white' }}>Rozet</Text>
                        </TouchableOpacity>



                    </View>


                </View>




               <View style={{ flex: 1.1, backgroundColor: '#ffffff', marginBottom: 10 }}> 


                    <View style={styles.container}>



                        {/*View to hold the child screens 
        which can be changed on the click of a button*/}
                        <View style={{ flex:1, backgroundColor: '#ffffff' }}>
                            {renderElement()}
                        </View>
                    </View>

                </View>
             </View>


        );
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        padding: 0,
        marginTop: 0,

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});

export default ProfileScreen;