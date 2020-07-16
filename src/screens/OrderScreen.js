import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TouchableOpacity,
    UselessTextInput,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Styles from '../styles/Styles';
import { TextInput } from 'react-native-paper';

const OrderScreen = ({navigation, route}) => {

    const [name, setName] = useState('')
  
    useEffect(() => {
        
    }, []);
  
    return (
      <>
        <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
                <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
                />                   
                <View>
                      
                </View>          
            </View>
        </View>
      </>
    );
  };
  
  export default OrderScreen;
  