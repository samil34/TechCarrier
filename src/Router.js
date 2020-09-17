import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';

//-------> SCREENS <-------\\
import LoadingScreen from '../src/routers/Loading/LoadingScreen';
import LoginScreen from '../src/routers/Auth/LoginScreen';
import SignUpScreen from '../src/routers/Auth/SignUpScreen';
import HomeScreen from '../src/routers/Home/HomeScreen';
import HomeSubmit from '../src/routers/Submit/HomeSubmit';

import ProfileScreen from '../src/routers/Profile/ProfileScreen';
import Settings from '../src/routers/Profile/Settings';
import Edit from '../src/routers/Profile/Edit';
import Biyografi from '../src/routers/Profile/Biyografi';
import OnlineCourse from '../src/routers/Home/OnlineCourse';


import TabsComponent from '../src/routers/Tabs/TabsComponent';
import MostLikedPage from '../src/routers/MostLiked/MostLikedPage';
import Search from '../src/routers/Search/Search';
import FreeLessons from '../src/routers/Home/FreeLessons';
import SearchCategory from '../src/routers/Search/SearchCategory';
import DetailScreen from '../src/routers/Profile/DetailScreen';
import Gonderiler from '../src/routers/Profile/Gonderiler';
import ProfileScreens from './routers/Profile/ProfileScreen';
import Rozet from '../src/routers/Profile/Rozet';
import Kaydedilenler from '../src/routers/Profile/Kaydedilenler';
import FirstScreen from '../src/routers/Auth/FirstScreen';




import OnlineCourses from '../src/routers/OnlineCourses/OnlineCourses'
import RequestAndSuggestions from '../src/routers/RequestAndSuggestions/RequestAndSuggestion';
import AskedQuestions from '../src/routers/AskedQuestions/AskedQuestions';
import HelpCenter from '../src/routers/HelpCenter/HelpCenter';
import Menu from '../src/routers/Menu/Menu'


const RootStack = createStackNavigator();
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
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
      <Icon name='list' type='FontAwesome' />
    </TouchableOpacity>
  )
}
const HomeStack = createStackNavigator();


const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>


      <HomeStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
        })} />

      <HomeStack.Screen name="HomeSubmit" component={HomeSubmit} />


      <HomeStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={({ navigation, route }) => ({
        headerShown: false,
      })}
      />

     
      <HomeStack.Screen
        name="Edit"
        component={Edit}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />


    </HomeStack.Navigator>

  );
};




const OnlineCoursesStack = createStackNavigator();
const OnlineCoursesScreen = () => {
  return (
    <OnlineCoursesStack.Navigator>
      <OnlineCoursesStack.Screen name="Search" component={OnlineCourses} />
    </OnlineCoursesStack.Navigator>
  );
};


const RequestStack = createStackNavigator();
const RequestScreen = () => {
  return (
    <RequestStack.Navigator>
      <RequestStack.Screen name="Search" component={RequestAndSuggestions} />
    </RequestStack.Navigator>
  );
}




const AskedStack = createStackNavigator();
const AskedScreen = () => {
  return (
    <AskedStack.Navigator>
      <AskedStack.Screen name="Search" component={AskedQuestions} />
    </AskedStack.Navigator>
  );
}





const TabStack = createBottomTabNavigator();
const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Search') {
            iconName = 'star';
          }

          return (
            <Icon
              type="FontAwesome"
              name={iconName}
            //style={{color: focused ? colors.main : color, fontSize: size}}
            />
          );
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <TabStack.Screen name="Home" component={HomeStackScreen} />
      <TabStack.Screen name="Search" component={OnlineCoursesScreen} />
      
    </TabStack.Navigator>
  );
};

/*return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="HomeScreen">
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />

          <RootStack.Screen 
            name="FirstScreen" 
            component={FirstScreen} 
            options={({ navigation, route }) => ({
              headerShown: false,
            })}
            />

          
          <RootStack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={({ navigation, route }) => ({
            headerShown: false,
          })}
          />
          <RootStack.Screen 
           name="SignUpScreen" 
           component={SignUpScreen} 
           options={({ navigation, route }) => ({
            headerShown: false,
          })}
           />

          <RootStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="ProfileScreens"
            component={ProfileScreens}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />




          <RootStack.Screen
            name="Gonderiler"
            component={Gonderiler}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

<RootStack.Screen
            name="Rozet"
            component={Rozet}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

<RootStack.Screen
            name="Kaydedilenler"
            component={Kaydedilenler}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />






          <RootStack.Screen name="TabsComponent" component={TabsComponent} />


          
          

          <RootStack.Screen
          
            name="Edit"
            component={Edit}
            options={({ navigation, route }) => ({
              title: 'Edit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="Settings"
            component={Settings}
            options={({ navigation, route }) => ({
              title: 'Settings',
              headerShown: false,
            })}
          />

<RootStack.Screen
            name="Biyografi"
            component={Biyografi}
            options={({ navigation, route }) => ({
              title: 'Settings',
              headerShown: false,
            })}
          />


          

          


          <RootStack.Screen
            name="DetailScreen"
            component={DetailScreen}
            options={({ navigation, route }) => ({
              title: 'DetailScreen',
              headerShown: false,
            })}
          />

          

         


          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({ navigation, route }) => ({
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="OnlineCourse"
            component={OnlineCourse}
            options={({ navigation, route }) => ({
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="HomeSubmit"
            component={HomeSubmit}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="Search"
            component={Search}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />




          <RootStack.Screen
            name="MostLikedPage"
            component={MostLikedPage}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="FreeLessons"
            component={FreeLessons}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="SearchCategory"
            component={SearchCategory}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />


        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );*/
const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={Menu}
      /*drawerContentOptions={{activeTintColor: '#e91e63',
      itemStyle: { marginVertical: 5 },
    }}*/
      drawerType="back"
      drawerStyle={{
        width: '85%',
      }}>
      <DrawerStack.Screen name="Tech Carier" component={TabStackScreen} />
      <DrawerStack.Screen name="Online Kurslar" component={OnlineCoursesScreen} />
      <DrawerStack.Screen name="İstek ve Öneriler" component={RequestScreen} />
      <DrawerStack.Screen name="Sık Sorulan Sorular" component={AskedQuestions} />
      <DrawerStack.Screen name="Yardım Merkezi" component={HelpCenter} />
    </DrawerStack.Navigator>
  );
};
function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none" mode="modal">
        <RootStack.Screen name="Main" component={DrawerStackScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
