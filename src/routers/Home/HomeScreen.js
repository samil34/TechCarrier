import  * as React from 'react';
import { useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Fab, Icon } from 'native-base';

import { Button } from '../../components';
import { colors } from '../../style';


import { connect } from 'react-redux';
import { getList } from '../../redux/actions';


const HomeScreen = (props) => {

    useEffect(() => {
        props.getList()
    }, []);

    const renderItem = ({item}) => (
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
                        

                        <View style={{ justifyContent: 'center' }}>
                            <Text>  {item.user.name}</Text>
                            <Text>  {item.user.rozet}</Text>
                        </View>

                        </TouchableOpacity>
                       </View>
                       
                    



                    <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 10, backgroundColor: '#a9d1f1', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                     <Text>{item.category}</Text>
                    </View>

                </View>



                <View style={{ marginTop: 15, marginBottom: 15 }}>
                  <Text>{item.dsc}</Text>

                </View>

                <View style={{ marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ color: '#0087d1' }}> {item.link} </Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>{item.likes.length}</Text>
                    <Text>{item.comments.length} yorum</Text>
                </View>

                <View style={{ borderTopWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <Text>Beğen </Text>
                    <Text>Yorum yap</Text>
                    <Text>Kaydet</Text>
                </View>



            </View>
    );

    return (


        <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
               {/* <Icon style={{ color: 'black', fontSize: 16 }}>kişi foto/</Icon> */}
                <Icon name="user" type='FontAwesome' style={{ fontSize: 30, color: 'black' }} />
                <Text style={{ color: colors.main, fontSize: 16 }}>Home</Text>
                <Text >Logo</Text>

            </View>

            <FlatList
                style={{ flex: 1 }}
                data={props.list}
                renderItem={renderItem}
                keyExtractor={item => item.id}
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
                <Icon name="pencil" type='FontAwesome' style={{ fontSize: 20, color: 'white' }} />
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


});


const mapStateToProps = ({ listResponse }) => {
    const { list } = listResponse;
    return { list };
};

export default connect(mapStateToProps, { getList })(HomeScreen);
