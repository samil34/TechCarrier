import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';

import { colors } from '../../style';
import { Fab, Icon } from 'native-base';


const DATA = [
    {
        user: { name: 'Şamil Akpınar', rozet: 'Yeni' },
        date: '1 sa',
        category: 'Yapay Zeka ',
        aciklama: 'Kurslar hakkında bilgi',
        link: 'https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/',
        likes: ["eren", "onur", "mukaddes"],
        comments: ["samil", "mukaddes", "onur", "ali", "veli"]
    },
    {
        user: { name: 'Eren ', rozet: 'Yeni' },
        date: '12 sa',
        category: 'React-native  ',
        aciklama: 'kurs için bilgi ',
        link: 'https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/',
        likes: ["eren", "onur", "mukaddes"],
        comments: ["samil", "mukaddes", "onur", "ali"]
    }
];


const renderItem = ({ item }) => (

    <View style={styles.item}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View>
                <TouchableOpacity 
                style={{ flexDirection: 'row' }}
                onPress={() => { props.navigation.navigate('ProfileScreen') }}
                >

                    <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 25, backgroundColor: 'white', width: '25%', justifyContent: 'center', alignItems: 'center', height: 50, width: 50 }}>
                        <Text>foto</Text>
                    </View>


                    <View style={{ justifyContent: 'center', marginLeft: 5 }}>
                        <Text>{item.user.name}</Text>
                        <Text>{item.user.rozet} . {item.date}</Text>
                    </View>
                </TouchableOpacity>


            </View>

            <View style={{
                borderWidth: 0.6,
                marginVertical: 2,
                marginHorizontal: 1,
                padding: 5,
                borderRadius: 10,
                backgroundColor: '#a9d1f1',
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text >{item.category}</Text>
            </View>

        </View>



        <View style={{ marginTop: 15, marginBottom: 15 }}>
            <Text>{item.aciklama}</Text>

        </View>

        <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text style={{ color: '#0087d1' }}> {item.link} </Text>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>{item.likes.length}</Text>
            <Text>{item.comments.length} Yorum</Text>
        </View>

        <View style={{ borderTopWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
            <Text>Beğen </Text>
            <Text>Yorum yap</Text>
            <Text>Kaydet</Text>
        </View>



    </View>

)



const OnlineCourse = (props) => {



    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>


            <FlatList
                style={{ flex: 1 }}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.user}
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
                                List is empty now. Start adding tasks!
                            </Text>
                            
                        </View>
                    )
                }}
            />






            <Fab
                containerStyle={{}}
                style={{ backgroundColor: colors.main }}
                position="bottomRight"
                onPress={() => { props.navigation.navigate('HomeSubmit') }}>
                <Icon name="plus" type='FontAwesome' style={{ fontSize: 20, color: 'white' }} />
            </Fab>


        </SafeAreaView>
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



    }


});

export default OnlineCourse;
