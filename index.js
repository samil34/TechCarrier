import {AppRegistry} from 'react-native';
import Routher from './src/Routher';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => Routher);
