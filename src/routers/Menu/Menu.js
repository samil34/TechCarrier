import React from 'react';
import { Text, View, Linking, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../style'

const Menu = (props) => {

    const sections = (icon, name, onPress) => {
        return (
            <View style={{ flexDirection: 'row', backgroundColor: '', alignItems: 'center', marginBottom: 20 }}>
                {icon != null ? <Icon name={icon} size={20} style={{ width: 30 }} /> : null}
                <Text onPress={onPress} style={{ fontSize: 14, marginLeft: 20 }}>{name}</Text>
            </View>
        )
    }

    const selectPhoto = () => {

    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 2, padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    {
                        props.profile_image?
                            <TouchableOpacity
                                onPress={() => selectPhoto()}
                            >
                                <Image
                                    source={{ uri: '' }}
                                    style={{ width: 60, height: 60, borderRadius: 30, }}
                                /></TouchableOpacity> :
                            <Icon name={'user-circle'} size={40} onPress={() => selectPhoto()} />
                    }
                </View>
                
                <Icon name={'ellipsis-h'} size={20} color={colors.main} />

            </View>

            <View style={{ flex: 7 }}>
                <ScrollView style={{ backgroundColor: '' }}>
                    <View style={{ backgroundColor: '', padding: 20 }}>
                        {sections('user', 'Profil', () => {

                        })}
                        {sections('list-alt', 'Listeler')}
                        {sections('adjust', 'Konu Başlıkları')}
                        {sections('bookmark', 'Yer İşaretleri')}
                        {sections('bolt', 'Anlar')}
                        {sections('id-badge', 'Takipçi İstekleri') }
                    </View>

                    <View style={{ backgroundColor: 'black', height: 0.5, width: '100%', marginBottom: 20 }} />

                    {sections(null, 'Ayarlar ve gizlilik')}
                    {sections(null, 'Yardım Merkezi',
                        
                    )}

                </ScrollView>
            </View>

        </SafeAreaView>
    )
};

export default Menu;