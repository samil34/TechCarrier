import React from 'react';
 import { Text, View, FlatList } from 'react-native';
import { Fab, Icon } from 'native-base';
 import { connect } from 'react-redux';


 const HomeScreen = (props) => {
     return (
         <View style={{ flex: 1, backgroundColor: 'red' }}>
             <Text>Hello</Text>

             <Fab
                 containerStyle={{}}
                 style={{ backgroundColor: 'red' }}
                 position="bottomRight"
                  onPress={() => { props.navigation.navigate('HomeSubmit') }}>
                 <Icon name="pencil" type='FontAwesome' style={{ color: 'white' }} />
             </Fab>
         </View>
     )

 }

 export default HomeScreen;

