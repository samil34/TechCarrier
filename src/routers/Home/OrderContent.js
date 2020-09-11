//iptal edilecek

import React from 'react';
import { Text, View,StyleSheet,TouchableOpacity } from 'react-native';

import { colors } from '../../style';
import { Fab, Icon } from 'native-base';


const OrderContent = (props) => (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
        <Text style={{ color: 'black', fontSize: 16 }}>Kişi foto</Text>
        <Text style={{ color: colors.main, fontSize: 16 }}>Diğer İçerikler</Text>
        <Text >Logo</Text>

    </View>

    <View style={styles.item}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity>

                    <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 25, backgroundColor: 'white', width: '25%', justifyContent: 'center', alignItems: 'center', height: 50, width: 50 }}>
                        <Text>foto</Text>

                    </View>
                </TouchableOpacity>

                <View style={{ justifyContent: 'center',marginLeft:5 }}>
                    <Text>Şamil Akpınar</Text>
                    <Text>Yeni . 1 sa</Text>
                </View>


            </View>



            <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 10, backgroundColor: '#a9d1f1', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Mobil uygulama</Text>
            </View>

        </View>



        <View style={{ marginTop: 15, marginBottom: 10 }}>
          <Text>Bilgi yazılacak</Text>

        </View>

        <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Text style={{ color: '#0087d1' }}> link </Text>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>5</Text>
            <Text> yorum</Text>
        </View>

        <View style={{ borderTopWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>Beğen </Text>
            <Text>Yorum yap</Text>
            <Text>Kaydet</Text>
        </View>



    </View>


    




    <Fab
        containerStyle={{}}
        style={{ backgroundColor: colors.main }}
        position="bottomRight"
        onPress={() => { props.navigation.navigate('OnlineCourse') }}>
        <Icon name="plus" type='FontAwesome' style={{ fontSize: 20, color: 'white' }} />
    </Fab>
</View>
);


const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: 'gray',
        backgroundColor: '#ffffff',



    }

    
});

export default OrderContent;
