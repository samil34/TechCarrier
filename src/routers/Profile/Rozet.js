import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity, FlatList } from 'react-native';

const tech = "../../img/tech5png.png";





const Data = [
    {
      "id":"1",
      "dsc":"Burada Yeni",
      "badge":require( '../../img/start2.png' )

  },
  {
    "id":"2",
    "dsc":"Paylaşımcı",
    "badge":require( '../../img/begen.png' )

},
  {
      "id":"3",
      "dsc":"Girişimci",
      "badge":require( '../../img/girisim1.png' )

  },
  {
      "id":"4",
      "dsc":"Teknoloji Sever",
      "badge":require( '../../img/innovation.png' )

  },
  {
      "id":"5",
      "dsc":"Kariyer Sahibi",
      "badge":require( '../../img/kariyer.png' )

  },
  {
      "id":"6",
      "dsc":"Beğenilen",
      "badge":require( '../../img/begeniler.png' )

  },
  {
      "id":"7",
      "dsc":"Kurs Bulucu",
      "badge":require( '../../img/bulucu.png' )
    
  },
  {
      "id":"8",
      "dsc":"Mentor",
      "badge":require( '../../img/mentor.png' )

  },
  {
      "id":"9",
      "dsc":"Sektörde Pro",
      "badge":require( '../../img/sektordepro.png' )


  }
];




const renderItem = ({ item }, props) => {

   return(
 <View
        style={{ marginLeft: 15, marginRight: 15, marginTop: 15, flexDirection: 'row', alignItems: 'center' }}

        >
        <View style={{   width: 50, height: 50, borderRadius: 25, backgroundColor:'', justifyContent:'center', alignItems:'center'}}>

        <Image

           source={item.badge}
           style={{width:36,height:36}}
           />

        </View>

 <Text style={{ marginLeft: 10, marginRight: 50 }}>{item.dsc}</Text>

      </View>
   )
};



    const Rozet = (props) => {



    return (


        <View style={{ flex: 1, backgroundColor: '#ffffff', marginBottom: 5 }}>



        <FlatList


            style={{ flex: 1 }}
            data={Data}
            renderItem={(item) => renderItem(item, props)}

            keyExtractor={item => item.id
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
