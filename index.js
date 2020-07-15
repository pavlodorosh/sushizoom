/**
 * @format
 */

import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import credentials from './firebase_credentials';
import firebase from '@react-native-firebase/app';

firebase.initializeApp(credentials);

AppRegistry.registerComponent(appName, () => App);


