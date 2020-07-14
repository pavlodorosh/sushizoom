import firebase from '@react-native-firebase/app'

const firebaseConfig = {
  clientId: '',
  appId: 'sushizoom-20200708',
  apiKey: 'AIzaSyA7PcenBeXPbN1mfOZHTrr6uhwJPWv8NMw',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: '',
  projectId: '',
}


firebase.initializeApp(firebaseConfig)

export default firebase