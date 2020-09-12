import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Home from '../Home/HomeScreen';
import MostLike from '../MostLiked/MostLikedPage';
import Icon from 'react-native-ionicons';
import OnlineEvents from '../OnlineEvents/OnlineEvents';
import OnlineCourses from '../OnlineCourses/OnlineCourses';
import OtherContent from '../OtherContent/OtherContent';
import AskedQuestions from '../AskedQuestions/AskedQuestions';
import HelpCenter from '../HelpCenter/HelpCenter';
import SettingsAndPrivacy from '../SettingsAndPrivacy/SettingsAndPrivacy';
import RequestAndSuggestions from '../RequestAndSuggestions/RequestAndSuggestion';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Tab = createBottomTabNavigator();
const bottomTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      keyboardHidesTabBar: false,
      activeTintColor: 'red',
      /*  activeTintColor: '#ffffff',
        inactiveTintColor: '#9e9e9e',
        activeBackgroundColor: "#FADAD8",
        inactiveBackgroundColor: "#D09E88",*/
      //activeBackgroundColor: '#f0edf6',
      // inactiveBackgroundColor: '#3e2465',
      showLabel: true,
      style: {
        // backgroundColor: 'yellow',
        zIndex: 110,
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'My home',

        tabBarIcon: ({color, size}) => (
          <Icon name="bell" color={color} size={28} />
        ),
      }}
    />

    <Tab.Screen
      name="MostLike"
      component={MostLike}
      options={{
        tabBarIcon: ({color, size}) => (
          <View></View>
          //<MaterialIcons name="settings" color={color} size={28} />
        ),
      }}
    />
  </Tab.Navigator>
);
const menu = (navigation) => {
  return (
      <TouchableOpacity
          onPress={() => {
              navigation.openDrawer()
          }}
          style={{
              marginLeft: 10
          }}
      >
          <Icon name='user' type='FontAwesome' />
      </TouchableOpacity>
  )
}
const DrawerStack = createDrawerNavigator();
const CustomDrawerComponent=()=>{
  <View><Text>djnmckd</Text></View>
}
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator>
      <DrawerStack.Screen name="Ana Sayfa" component={bottomTabNavigator} />
      <DrawerStack.Screen name="Online Etkinlikler" component={OnlineEvents} />
      <DrawerStack.Screen name="Online Kurslar" component={OnlineCourses} />
      <DrawerStack.Screen name="Diğer İçerikler" component={OtherContent} />
      <DrawerStack.Screen
        name="İstek ve Öneriler" options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
      })}
        component={RequestAndSuggestions}
      />
      <DrawerStack.Screen
        name="Sık Sorulan Sorular"
        component={AskedQuestions}
      />
      <DrawerStack.Screen
        name="Ayarlar ve Gizlilik"
        component={SettingsAndPrivacy}
      />
      <DrawerStack.Screen name="Yardım Merkezi" component={HelpCenter} />
    </DrawerStack.Navigator>
  );
};
const Stack = createStackNavigator();
function TabsComponent() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={DrawerStackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default TabsComponent;
