import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, FlatList } from 'react-native';


const Data = [
    {
      "id":"1",
      "user":{"name":"Eren Tanrıverdioğlu", "rozet":"Pro . 1 gun"},
      "dsc":"Burada Yeni",
      "category":"Girisimcilik",
      "link":"Yeni",
      "likes":["samil","mukaddes"],
      "comments":["samil","mukaddes","onur","ali"]
  },
  {
    "id":"2",
    "user":{"name":"Eren Tanrıverdioğlu", "rozet":"Pro . 1 gun"},
    "dsc":"Paylaşımcı",
    "category":"Girisimcilik",
    "link":"Yeni",
    "likes":["samil","mukaddes"],
    "comments":["samil","mukaddes","onur","ali"]
},
  {
      "id":"3",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Girişimci",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  },
  {
      "id":"4",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Teknoloji Sever",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"],
      "image":""
  },
  {
      "id":"5",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Kariyer Sahibi",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  },
  {
      "id":"6",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Beğenilen",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  },
  {
      "id":"7",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Kurs Bulucu",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  },
  {
      "id":"8",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Mentor",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"]
  },
  {
      "id":"9",
      "user":{"name":"Şamil Akpınar", "rozet":"Yeni . 12 sa"},
      "dsc":"Sektörde Pro",
      "category":"Girimcilik",
      "link":"Pro",
      "likes":["eren","onur","mukaddes"],
      "comments":["eren","onur"],
      
  }
];


const renderItem = ({ item }, props) => (

  // console.log('item içindekiler: ', item),
 <View
        style={{ marginLeft: 15, marginRight: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}
       
        >
        <View style={{ borderWidth: 1, borderColor: 'gray', width: 50, height: 50, borderRadius: 25, backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
        <Image 
           
           source={require('../../img/girisim1.png')}
           style={{width:36,height:36}}
           />

        </View>
         {/* eğer paylaşım girişimcilik ise onun dışarıdan bir fotosunu koyacağız */}
         
         {/* Tıklamalı yazı linki olacak yada başka bir sayfa acılacak */}
 <Text style={{ marginLeft: 10, marginRight: 50 }}>{item.dsc}</Text>
 
      </View>
 );



    const Rozet = (props) => {
 
  
  
    return (
      
        
        <View style={{ flex: 1, backgroundColor: '#ffffff', marginBottom: 5 }}>
    
     

        <FlatList
        
          
            style={{ flex: 1 }}
            data={Data}
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

export default Rozet;
