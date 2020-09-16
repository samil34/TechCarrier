
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native'; 
 import Router from './src/Router';
//import App from './src/routers/Profile/App'
//import ProfileScreens from './src/routers/Profile/ProfileScreens'
import {name as appName} from './app.json';
import App from './App'
AppRegistry.registerComponent(appName, () => App);
