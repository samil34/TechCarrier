import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import TabsComponent from '../src/routers/Tabs/TabsComponent';
import MostLikedPage from '../src/routers/MostLiked/MostLikedPage';
import Search from '../src/routers/Search/Search';
import FreeLessons from '../src/routers/Home/FreeLessons';
import SearchCategory from '../src/routers/Search/SearchCategory';

const RootStack = createStackNavigator();

function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Search">
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
          <RootStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
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
              title: 'Biyografi',
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
  );
}

export default App;
