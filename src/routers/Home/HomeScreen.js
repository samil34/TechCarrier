import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Fab, Icon } from 'native-base';
import { connect } from 'react-redux';

import { Button } from '../../components';
import { colors } from '../../style';
import { TouchableOpacity } from 'react-native-gesture-handler';




const HomeScreen = (props) => {




    return (


        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
                <Text style={{ color: 'black', fontSize: 16 }}>kişi foto</Text>
                <Text style={{ color: colors.main, fontSize: 16 }}>Home</Text>
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

                        <View style={{ justifyContent: 'center' }}>
                            <Text>  Ahmet Sefa</Text>
                            <Text>  rozet ismi . 1 gün</Text>
                        </View>


                    </View>



                    <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 10, backgroundColor: '#a9d1f1', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Girişimcilik</Text>
                    </View>

                </View>



                <View style={{ marginTop: 15, marginBottom: 15 }}>
                    <Text>Stockholm merkezli müzik veri akışı ve podcast servisi Spotify’ın piyasa değeri son üç ayda iki katından fazla artarak 50 milyar dolara yaklaştı. 23 Haziran’da New York borsasında hisse başına 241,99 dolar olmak üzere toplam 44,96 milyar dolar piyasa değerine ulaşan şirket, son zamanlarda podcast alanında yaptığı yatırımlarla adından sıkça söz ettirmişti.</Text>

                </View>

                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ color: '#0087d1' }}> https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/ </Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>55</Text>
                    <Text>5 yorum</Text>
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
                onPress={() => { props.navigation.navigate('HomeSubmit') }}>
                <Icon name="pencil" type='FontAwesome' style={{ color: 'white' }} />
            </Fab>
        </View>




    )


}


const styles = StyleSheet.create({

    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 0.5,
        borderRadius: 25,
        borderColor: 'gray',
        backgroundColor: '#ffffff',



    },

    kategori: {

    }


});
export default HomeScreen;

