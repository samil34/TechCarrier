import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';
import { navigationRef } from './RootNavigation';

//-------> SCREENS <-------\\
import LoadingScreen from '../src/routers/Loading/LoadingScreen';
import FirstScreen from '../src/routers/Auth/FirstScreen';
import LoginScreen from '../src/routers/Auth/LoginScreen';
import SignUpScreen from '../src/routers/Auth/SignUpScreen';

import HomeSubmit from '../src/routers/Submit/HomeSubmit';
import HomeScreen from '../src/routers/Home/HomeScreen';
import OnlineCourse from '../src/routers/Home/OnlineCourse';

import ProfileScreen from '../src/routers/Profile/ProfileScreen';
import Settings from '../src/routers/Profile/Settings';
import Edit from '../src/routers/Profile/Edit';
import Biyografi from '../src/routers/Profile/Biyografi';

import MostLikedPage from '../src/routers/MostLiked/MostLikedPage';
import Search from '../src/routers/Search/Search';
import FreeLessons from '../src/routers/Home/FreeLessons';
import SearchCategory from '../src/routers/Search/SearchCategory';
import DetailScreen from '../src/routers/Profile/DetailScreen';
import Gonderiler from '../src/routers/Profile/Gonderiler';
import ProfileScreens from './routers/Profile/ProfileScreen';
import Rozet from '../src/routers/Profile/Rozet';
import Kaydedilenler from '../src/routers/Profile/Kaydedilenler';

import OnlineCourses from '../src/routers/OnlineCourses/OnlineCourses'
import RequestAndSuggestions from '../src/routers/RequestAndSuggestions/RequestAndSuggestion';
import AskedQuestions from '../src/routers/AskedQuestions/AskedQuestions';
import HelpCenter from '../src/routers/HelpCenter/HelpCenter';
import Menu from '../src/routers/Menu/Menu';

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

const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='FirstScreen'>
      <AuthStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={({ navigation, route }) => ({
          title: 'Login',
          headerShown: false
        })}
      />

      <AuthStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={({ navigation, route }) => ({
          title: 'Login',
          headerShown: false
        })}
      />

      <AuthStack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{
          title: 'Register',
          headerShown: false
        }}
      />
    </AuthStack.Navigator>
  )
}

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
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

const SearchStack = createStackNavigator();
const SearchStackScreen = () => {
  return (
    <SearchStack.Navigator>

      <SearchStack.Screen
        name="Search"
        component={Search}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
        })} />

    </SearchStack.Navigator>

  );
};


const MostLikedStack = createStackNavigator();
const MostLikedStackScreen = () => {
  return (
    <MostLikedStack.Navigator>

      <MostLikedStack.Screen
        name="MostLikedPage"
        component={MostLikedPage}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
        })} />

    </MostLikedStack.Navigator>

  );
};


const TabStack = createBottomTabNavigator();
const TabStackScreen = () => {
  return (
    <TabStack.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MostLiked') {
            iconName = 'star';
          } else if (route.name === 'Search') {
            iconName = 'search';
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
      <TabStack.Screen name="MostLiked" component={MostLikedStackScreen} />
      <TabStack.Screen name="Search" component={SearchStackScreen} />

    </TabStack.Navigator>
  );
};


const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={Menu}
      drawerType="back"
      drawerStyle={{
        width: '85%',
      }}
    >
      <DrawerStack.Screen name="Tech Carier" component={TabStackScreen} />
    </DrawerStack.Navigator>
  );
};

const RootStack = createStackNavigator();
function Router() {

  const user = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none" mode="modal">
        {
          user ?
            (
              <>
                <RootStack.Screen
                  name="Main"
                  component={DrawerStackScreen}
                  options={{
                    animationEnabled: false
                  }}
                />
              </>

            ) :
            (<RootStack.Screen
              name="Auth"
              component={AuthStackScreen}
              options={{
                animationEnabled: false
              }}
            />)
        }
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
