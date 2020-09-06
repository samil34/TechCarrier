import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from '../src/routers/Loading/LoadingScreen';
import LoginScreen from '../src/routers/Auth/LoginScreen';
import SignUpScreen from '../src/routers/Auth/SignUpScreen';
import HomeScreen from '../src/routers/Home/HomeScreen';
import HomeSubmit from '../src/routers/Submit/HomeSubmit';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';

const RootStack = createStackNavigator();

function App() {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName='HomeScreen'>
          <RootStack.Screen name="LoadingScreen" component={LoadingScreen} />
          <RootStack.Screen name="LoginScreen" component={LoginScreen} />
          <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />


          <RootStack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={({ navigation, route }) => ({
            title: 'Submit',
            headerShown: false
        })}
          />


          
          <RootStack.Screen 
            name="HomeSubmit" 
            component={HomeSubmit}
            options={({ navigation, route }) => ({
              title: 'Submit',
              headerShown: false
          })}
            />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
