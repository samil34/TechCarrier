import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, FlatList } from 'react-native';


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


const renderItem = ({ item }, props) => (

  // console.log('item içindekiler: ', item),
 <TouchableOpacity 
        style={{ marginLeft: 15, marginRight: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}
        onPress= {() => {props.navigation.navigate('DetailScreen')}}
        >
 
         {/* eğer paylaşım girişimcilik ise onun dışarıdan bir fotosunu koyacağız */}
         <Image 
           style={{ borderWidth: 1, borderColor: 'gray', width: 50, height: 50, borderRadius: 7 }}
           source={require('../../img/girisim1.png')}
           />
         {/* Tıklamalı yazı linki olacak yada başka bir sayfa acılacak */}
 <Text style={{ marginLeft: 10, marginRight: 50 }}>{item.dsc}</Text>
 
      </TouchableOpacity>
 );




    const Kaydedilenler = (props) => {


    
        return (
      
        
            <View style={{ flex: 1, backgroundColor: '#ffffff', marginBottom: 25}}>
        
         <Text> kayıt</Text>
    
            <FlatList
            
              
                style={{ flex: 1 }}
                data={DATA}
                renderItem={(item) => renderItem(item, props)}
            
                keyExtractor={item => item.dsc
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
    
         
         
         
        );
  
}

export default Kaydedilenler;

