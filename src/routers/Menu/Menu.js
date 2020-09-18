import React from 'react';
import { Text, View, Linking, SafeAreaView, ScrollView ,Image,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style'

import { connect } from 'react-redux';
import { signOut } from '../../redux/actions';

const Menu = (props) => {

    const sections = (icon, name, onPress) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '', alignItems: 'center', marginBottom: 20 }}>
                {icon != null ? <Icon name={icon} size={20} style={{ width: 30, color: colors.main }} /> : null}
                <Text onPress={onPress} style={{ fontSize: 14, marginLeft: 20}}>{name}</Text>
            </View>
        )
    }

    const selectPhoto = () => {
        props.navigation.navigate('ProfileStackScreen');
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>


            <View style={{ flex: 2, padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    {
                       // props.profile_image?
                            <TouchableOpacity
                                onPress={() => selectPhoto()}
                            ><Image
                            source={require('../../img/foto.png')}
                            style={{ width: 60, height: 60, borderRadius: 30, }}/>

                                </TouchableOpacity>


                    }
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 14, marginTop: 10 }}>{'Şamil Akpınar'}</Text>

                    <Text style={{ fontSize: 12 }}>@{'samil_akpinar'}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ fontSize: 12, fontWeight:'bold' }}>7 </Text>
                        <Text style={{ fontSize: 12 }}>Gönderiler  </Text>
                        <Text style={{ fontSize: 12 }}>Burada Yeni </Text>
                    </View>

                </View>

                <Icon onPress={()=> {props.navigation.navigate('HomeScreen')}} name={'times'} size={20} color={colors.main} />

            </View>


            <View style={{ flex: 7 }}>
                <ScrollView style={{ backgroundColor: '' }}>
                    <View style={{ backgroundColor: '', padding: 20 }}>
                        {sections('user', 'Profil', () =>  {  props.navigation.navigate('ProfileStackScreen') })}

                        {sections('list-alt', 'Popüler Gönderiler', () =>  {  props.navigation.navigate('MostLikedPage') })}
                        {sections('question-circle', 'Sık Sorulan Sorular' , () =>  {  props.navigation.navigate('AskedQuestions') })}
                        {/* {sections('bolt', 'Anlar')}
                        {sections('id-badge', 'Takipçi İstekleri') } */}
                    </View>

                    <View style={{ backgroundColor: 'black', height: 0.5, width: '100%', marginBottom: 20 }} />

                    {sections(null, 'Yardım/İletişim', () =>  {  props.navigation.navigate('HelpScreen') })}
                    {/*sections(null, 'Çıkış', () => props.signOut())*/}
                    {/* {sections(null, 'Yardım Merkezi',

                    )} */}

                </ScrollView>
            </View>

        </SafeAreaView>
    )
};

export default Menu;

/*const mapStateToProps = ({ authResponse }) => {
  const { loading, user } = authResponse;
  return { loading, user };
};

export default connect(mapStateToProps, { signOut })(Menu);*/
