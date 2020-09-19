
import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';


const DATA = [
    {
      "id":"1",
      "user":{"name":"Eren Tanrıverdioğlu", "rozet":"Pro . 1 gun"},
      "dsc":"Stockholm merkezli müzik veri akışı ve podcast servisi Spotify’ın piyasa değeri son üç ayda iki katından fazla artarak 50 milyar dolara yaklaştı. 23 Haziran’da New York borsasında hisse başına 241,99 dolar olmak üzere toplam 44,96 milyar dolar piyasa değerine ulaşan şirket, son zamanlarda podcast alanında yaptığı yatırımlarla adından sıkça söz ettirmişti.",
      "category":"Girisimcilik",
      "link":"https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/",
      "likes":["samil","mukaddes"],
      "comments":["samil","mukaddes","onur","ali"]
  },
  {
      "id":"2",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Stockholm merkezli müzik veri akışı ve podcast servisi Spotify’ın piyasa değeri son üç ayda iki katından fazla artarak 50 milyar dolara yaklaştı. 23 Haziran’da New York borsasında hisse başına 241,99 dolar olmak üzere toplam 44,96 milyar dolar piyasa değerine ulaşan şirket, son zamanlarda podcast alanında yaptığı yatırımlarla adından sıkça söz ettirmişti.",
      "category":"Girisimcilik",
      "link":"https://www.musicbusinessworldwide.com/spotify-heading-towards-a-50bn-market-cap-is-worth-double-what-it-was-just-3-months-ago/",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  }
];


const renderItem = ({ item }, props) => {

    return(

        <View style={styles.item}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

               <View>
               <View
                style={{ flexDirection: 'row' }}

                >

                    <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 25, backgroundColor: 'white', width: '25%', justifyContent: 'center', alignItems: 'center', height: 50, width: 50 }}>
                        <Text>foto</Text>
                    </View>


                <View style={{ justifyContent: 'center' }}>
                    <Text>  {item.user.name}</Text>
                    <Text>  {item.user.rozet}</Text>
                </View>

                </View>
               </View>





            <View style={{ borderWidth: 0.6, marginVertical: 2, marginHorizontal: 1, padding: 5, borderRadius: 10, backgroundColor: '#a9d1f1', width: '25%', justifyContent: 'center', alignItems: 'center' }}>
             <Text>{item.category}</Text>
            </View>

        </View>



        <View style={{ marginTop: 15, marginBottom: 5 }}>
          <Text>{item.dsc}</Text>

        </View>

        <View style={{ marginTop: 10, marginBottom: 8 }}>
            <Text style={{ color: '#0087d1' }}> {item.link} </Text>

        </View>



        <View style={{ borderTopWidth: 0.5, flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <View style = {{flexDirection:'row'}}>
            <Text>{item.likes.length}</Text>
            <Text style ={{marginLeft:10}}>Beğen </Text>

            </View>

        </View>



    </View>


    );
        };



  const Gonderiler = (props) => {

    return (


<View style={{ flex: 1, backgroundColor: '#ffffff'}}>


<FlatList


    style={{ flex: 1 }}
    data={DATA}
    renderItem={(item) => renderItem(item, props)}

    keyExtractor={item => item.user.name}
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

export default Gonderiler;
