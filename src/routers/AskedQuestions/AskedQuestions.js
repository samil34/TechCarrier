import React, { useState } from 'react'
import { Platform, Text, View, SafeAreaView, ScrollView, Keyboard, Picker, StyleSheet, TextInput } from 'react-native'

import { Button, Input } from '../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style';

import { addCourse } from '../../redux/actions';
import { connect } from 'react-redux';


const AskedQuestions = (props) => {


    const [kategori, setKategori] = useState('Teknoloji')
    const [aciklama, setAciklama] = useState('')
    const [link, setLink] = useState('')



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f5f5' }}>

            <View style={{ backgroundColor: '', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15 }}>

                <Icon onPress={() => { props.navigation.pop() }} name={'times'} size={30} color={colors.main} />

            </View>




            <View style={{ flex: 12, padding: 10 }}>

                <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>TechCareer Nedir?</Text>
                <Text style={{ fontSize: 15 }}>Teknoloji, kariyer veya girişimcilik
                alanında bilgi sahibi kişilerin bilgi
                ve tecrübelerini paylaştığı bir platformdur.

               

</Text>
<Text style={{ marginBottom: 20, fontSize: 15 }}>Kişiler İnternet üzerinden gördükleri
                teknoloj, kariyer, girişimcilik gibi haberleri
                yine bu platformda yayınlayarak toplumsal fayda
                sağlamayı amaçlamaktadır.</Text> 

                <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>Online Eğitimler Nedir?</Text>
                <Text style={{ marginBottom: 20, fontSize: 15 }}>Özellikle youtube, zoom ve likedln'de düzenlenen online eğitimler, seminerlerin yayınlandığı bölümdür.</Text>


                <Text style={{ marginBottom: 5, fontSize: 20, fontWeight: 'bold' }}>Ücretsiz Dersler Nedir?</Text>
                <Text style={{ marginBottom: 20, fontSize: 15 }}>Kişiler udemy, coursera, kodluyoruz vb gibi sitelerdeki
                dersleri, bootcampleri, kampanyaları veya indirimleri burada paylaşarak kullanıcılara
 bilgi vermesi sağlanacaktır. </Text>
            </View>


        </SafeAreaView>

    )
}




const mapStateToProps = ({ courseResponse }) => {
    const { loading, list } = courseResponse;
    return { loading, list };
};


export default connect(mapStateToProps, { addCourse })(AskedQuestions);



