import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
    TextInput,
    TouchableOpacity,
    UselessTextInput,
    View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import Styles from '../styles/Styles';
import Telegram from 'telegram-send-message'

const OrderScreen = ({navigation, route}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')
  
    useEffect(() => {
        console.log(route.params.product)
    }, []);

    const sendMessage = () => {
      let message = `Нове замовлення! Імя: ${name}, Телефон: ${phone}, Адреса: ${address}, Коментар: ${comment}, Товар: ${route.params.product.name}`

      Telegram.setToken('868514272:AAH6bAavjGQHH-bztp9Buu1ugozGVfNCgl0');
      Telegram.setRecipient(490328195);
      Telegram.setMessage(message);
      Telegram.send();
    }
  
    return (
      <>
        <View style={Styles.body}>
            <View style={Styles.sectionContainer}>
                <Image
                source={require('../../assets/images/logo.png')}
                style={Styles.logoCategory}
                />                   
                <View style={Styles.form}>
                  <TextInput
                    style={Styles.input}
                    placeholder="Ім`я"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setName(v)}
                    value={name}
                  />
                  <TextInput
                    style={Styles.input}
                    placeholder="Телефон"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setPhone(v)}
                    value={phone}
                  />
                  <TextInput
                    style={Styles.input}
                    placeholder="Адреса"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setAddress(v)}
                    value={address}
                  />
                  <TextInput
                    style={Styles.input}
                    placeholder="Коментар"
                    placeholderTextColor="#DAE1E7"
                    onChangeText={v => setComment(v)}
                    value={comment}
                  />
                </View> 
                <TouchableOpacity onPress={() => {                  
                  if(name != '' || phone != '' || address != '' ){
                    sendMessage()
                    navigation.navigate('End');
                  }
                }}>
                  <View styl={Styles.orderBtn}>
                    <Text style={Styles.orderBtnText}>
                      ЗАМОВИТИ
                    </Text>
                  </View>
                </TouchableOpacity>        
            </View>
        </View>
      </>
    );
  };
  
  export default OrderScreen;
  