import * as React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';
import { Icon } from 'native-base';
import { navigationRef } from './RootNavigation';

import { colors } from '../src/style'

//-------> SCREENS <-------\\
import LoadingScreen from '../src/routers/Loading/LoadingScreen';
import FirstScreen from '../src/routers/Auth/FirstScreen';
import SplashScreen from '../src/routers/Splash'
import LoginScreen from '../src/routers/Auth/LoginScreen';
import SignUpScreen from '../src/routers/Auth/SignUpScreen';

import HomeSubmit from '../src/routers/Submit/HomeSubmit';
import HomeScreen from '../src/routers/Home/HomeScreen';
import OnlineCourse from '../src/routers/Home/OnlineCourse';
import CourseSubmit from '../src/routers/Submit/CourseSubmit';

import ProfileScreen from '../src/routers/Profile/ProfileScreen';
import Settings from '../src/routers/Profile/Settings';
import Edit from '../src/routers/Profile/Edit';
import Biyografi from '../src/routers/Profile/Biyografi';

import HelpScreen from '../src/routers/Help/HelpScreen';


import MostLikedPage from '../src/routers/MostLiked/MostLikedPage';
import Search from '../src/routers/Search/Search';
import FreeLessons from '../src/routers/Home/FreeLessons';
import LessonsSubmit from '../src/routers/Submit/LessonsSubmit';
import SearchCategory from '../src/routers/Search/SearchCategory';
import DetailScreen from '../src/routers/Profile/DetailScreen';
import Gonderiler from '../src/routers/Profile/Gonderiler';

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
      <View style={{ borderWidth: 0.2, width: 40, height: 40, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./img/foto.png')}
          style={{ width: 40, height: 40, borderRadius: 25 }}
        />
      </View>


    </TouchableOpacity>



  )
}

const logo = (navigation) => {
  return (

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('HomeScreen')
      }}
      style={{
        marginRight: 10
      }}
    >

      <Image
        source={require('./img/logo2.png')}
        style={{ width: 40, height: 40 }}
      />

    </TouchableOpacity>

  )
}



const AuthStack = createStackNavigator();
const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName='SplashScreen'>
      <AuthStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={({ navigation, route }) => ({
          title: 'Login',
          headerShown: false
        })}
      />
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
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

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => {

  return (

    <ProfileStack.Navigator>

      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation, route }) => ({
          headerShown: false,

        })}
      />

      <ProfileStack.Screen
        name="Edit"
        component={Edit}
        options={({ navigation, route }) => ({
          headerShown: false,
        })}
      />

      <ProfileStack.Screen
        name="Biyografi"
        component={Biyografi}
        options={({ navigation, route }) => ({
          headerShown: false,

        })}
      />



      <ProfileStack.Screen
        name="Gonderiler"
        component={Gonderiler}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),

        })}
      />

      <ProfileStack.Screen
        name="Kaydedilenler"
        component={Kaydedilenler}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),

        })}
      />

      <ProfileStack.Screen
        name="Rozet"
        component={Rozet}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),

        })}
      />



    </ProfileStack.Navigator>

  );

}


const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: 'TechCareer',
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation)
        })}
      />





      <HomeStack.Screen
        name="MostLikedPage"
        component={MostLikedPage}
        options={({ navigation, route }) => ({
          title: 'Popüler Gönderiler',
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),

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
        name="Arama"
        component={Search}
        options={({ navigation, route }) => ({
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),
        })} />

      <SearchStack.Screen
        name="SearchCategory"
        component={SearchCategory}
        options={({ navigation, route }) => ({
          title: 'Arama Sonucu',
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),
        })} />

    </SearchStack.Navigator>

  );
};




const FreeLessonsStack = createStackNavigator();
const FreeLessonsStackScreen = () => {
  return (
    <FreeLessonsStack.Navigator>
      <FreeLessonsStack.Screen
        name="FreeLessons"
        component={FreeLessons}
        options={({ navigation, route }) => ({
          title: 'Ücretsiz Dersler',
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),
        })} />





    </FreeLessonsStack.Navigator>

  );
};


const OnlineCourseStack = createStackNavigator();
const OnlineCourseStackScreen = () => {
  return (
    <OnlineCourseStack.Navigator>

      <OnlineCourseStack.Screen
        name="OnlineCourse"
        component={OnlineCourse}
        options={({ navigation, route }) => ({
          title: 'Online Eğitimler',
          headerLeft: () => menu(navigation),
          headerRight: () => logo(navigation),
        })} />



    </OnlineCourseStack.Navigator>

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
          } else if (route.name === 'Search') {
            iconName = 'search';
          } else if (route.name === 'Free') {
            iconName = 'book'
          } else if (route.name == 'Course') {
            iconName = 'calendar'
          }

          return (
            <Icon
              type="FontAwesome"
              name={iconName}
              style={{ color: focused ? colors.main : color, fontSize: size }}
            />
          );
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <TabStack.Screen name="Home" component={HomeStackScreen} />
      <TabStack.Screen name="Course" component={OnlineCourseStackScreen} />
      <TabStack.Screen name="Free" component={FreeLessonsStackScreen} />
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
      <DrawerStack.Screen name="TechCarier" component={TabStackScreen} />
      <DrawerStack.Screen name="ProfileStackScreen" component={ProfileStackScreen} />
    </DrawerStack.Navigator>


  );
};

const RootStack = createStackNavigator();
function Router(props) {

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator headerMode="none" mode="modal">
        {
          props.user ?
            (
              <>
                <RootStack.Screen
                  name="Main"
                  component={DrawerStackScreen}
                  options={{
                    animationEnabled: false
                  }}
                />

                <RootStack.Screen
                  name="HomeSubmit"
                  component={HomeSubmit}
                  options={({ navigation, route }) => ({
                    headerShown: false,
                  })}
                />

                <RootStack.Screen
                  name="CourseSubmit"
                  component={CourseSubmit}
                  options={({ navigation, route }) => ({
                    headerShown: false,

                  })} />

                <RootStack.Screen
                  name="LessonsSubmit"
                  component={LessonsSubmit}
                  options={({ navigation, route }) => ({
                    headerShown: false,
                  })} />

                <RootStack.Screen
                  name="HelpScreen"
                  component={HelpScreen}
                  options={({ navigation, route }) => ({
                    headerShown: false,
                  })} />
                  <RootStack.Screen
                  name="AskedQuestions"
                  component={AskedQuestions}
                  options={({ navigation, route }) => ({
                    headerShown: false,
                  })} />
                  
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

const mapStateToProps = ({ authResponse }) => {
  const { loading, user } = authResponse;
  return { loading, user };
};

export default connect(mapStateToProps, {})(Router);
