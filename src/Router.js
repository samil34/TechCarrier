import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import Icon from 'react-native-ionicons';

//-------> SCREENS <-------\\
import LoadingScreen from '../src/routers/Loading/LoadingScreen';
import LoginScreen from '../src/routers/Auth/LoginScreen';
import SignUpScreen from '../src/routers/Auth/SignUpScreen';
import Home from '../src/routers/Home/HomeScreen';
import HomeSubmit from '../src/routers/Submit/HomeSubmit';
import MostLikedPage from '../src/routers/MostLiked/MostLikedPage';
import ProfileScreen from '../src/routers/Profile/ProfileScreen';
import Settings from '../src/routers/Profile/Settings';
import Edit from '../src/routers/Profile/Edit';
import Biyografi from '../src/routers/Profile/Biyografi';
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
      <HomeStack.Screen name="Home" component={Home}  options={({ navigation, route }) => ({
                    headerLeft: () => menu(navigation),
                })}/>
      <HomeStack.Screen name="HomeSubmit" component={HomeSubmit} />
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
const RequestScreen =()=>{
  return (
    <RequestStack.Navigator>
      <RequestStack.Screen name="Search" component={RequestAndSuggestions} />
    </RequestStack.Navigator>
  );
}
const AskedStack = createStackNavigator();
const AskedScreen =()=>{
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
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
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
        <RootStack.Navigator initialRouteName="TabsComponent">
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
          <RootStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={({navigation, route}) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />
          <RootStack.Screen name="TabsComponent" component={TabsComponent} />
          <RootStack.Screen
            name="Edit"
            component={Edit}
            options={({navigation, route}) => ({
              title: 'Edit',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="Settings"
            component={Settings}
            options={({navigation, route}) => ({
              title: 'Settings',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="Biyografi"
            component={Biyografi}
            options={({navigation, route}) => ({
              title: 'Biyografi',
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={({navigation, route}) => ({
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="OnlineCourse"
            component={OnlineCourse}
            options={({navigation, route}) => ({
              headerShown: false,
            })}
          />

          <RootStack.Screen
            name="HomeSubmit"
            component={HomeSubmit}
            options={({navigation, route}) => ({
              title: 'Submit',
              headerShown: false,
            })}
          />
          <RootStack.Screen name="MostLikedPage" component={MostLikedPage} />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );*/
const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      //drawerContent={Menu}
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
